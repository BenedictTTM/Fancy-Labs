import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from '../Components/Search';
import { useDebounce } from '../Components/UseDebounce';
import AddMember from '../Components/AddMember';

type Member = {
  _id: string;
  name: string;
  dateOfBirth?: string;
  department?: string;
  location?: string;
  age?: number | null;
  gender?: string | null;
  about?: string | null;
};

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const Members: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [aboutUpdates, setAboutUpdates] = useState<{ [key: string]: string }>({});
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [addNewMember, setAddNewMember] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [memberToDelete, setMemberToDelete] = useState<string | null>(null);
  const debouncedSearch = useDebounce(searchTerm, 300);

  const fetchMembers = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Member[]>('http://localhost:5000/persons');
      setMembers(response.data);
    } catch (err: any) {
      toast.error(err.response?.data?.message || err.message || 'Failed to fetch members');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleAboutChange = (id: string, value: string) => {
    setAboutUpdates(prev => ({ ...prev, [id]: value }));
  };

  const handleUpdateAbout = async (id: string) => {
    if (!aboutUpdates[id] || aboutUpdates[id].trim() === '') {
      toast.error('About section cannot be empty');
      return;
    }

    setUpdatingId(id);

    try {
      await axios.put(`http://localhost:5000/person/${id}`, {
        about: aboutUpdates[id],
      });

      setMembers(prevMembers =>
        prevMembers.map(member =>
          member._id === id ? { ...member, about: aboutUpdates[id] } : member
        )
      );

      toast.success('About updated successfully!');
    } catch (err: any) {
      toast.error(err.response?.data?.message || err.message || 'Failed to update about section');
    } finally {
      setUpdatingId(null);
    }
  };

  const confirmDelete = (memberName: string) => {
    setMemberToDelete(memberName);
    setDeleteConfirm('');
  };

  const cancelDelete = () => {
    setMemberToDelete(null);
    setDeleteConfirm('');
  };

  const handleDeleteMember = async () => {
    if (!memberToDelete || deleteConfirm !== memberToDelete) return;

    try {
      await axios.delete(`http://localhost:5000/person/${memberToDelete}`);
      setMembers(prev => prev.filter(member => member._id !== memberToDelete));
      toast.success(`${memberToDelete} deleted successfully`);
    } catch (err: any) {
      toast.error(err.response?.data?.message || err.message || 'Failed to delete member');
    } finally {
      setMemberToDelete(null);
      setDeleteConfirm('');
    }
  };

  const formatDateOfBirth = (dateString?: string) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return {
      formatted: date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      month: date.getMonth() + 1,
      monthName: monthNames[date.getMonth()]
    };
  };

  const highlightMatch = (text: string | undefined | null, term: string) => {
    if (!text || !term) return text || '';
    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, `<mark class="bg-yellow-200">$1</mark>`);
  };

  const filteredMembers = useMemo(() => {
    if (!debouncedSearch) return members;

    const search = debouncedSearch.toLowerCase();
    const monthSearch = monthNames.findIndex(month => 
      month.toLowerCase().includes(search)
    );

    return members
      .filter((member) => {
        const dobInfo = formatDateOfBirth(member.dateOfBirth);
        return (
          member.name?.toLowerCase().includes(search) ||
          member.department?.toLowerCase().includes(search) ||
          member.location?.toLowerCase().includes(search) ||
          member.about?.toLowerCase().includes(search) ||
          (dobInfo && (
            dobInfo.monthName.toLowerCase().includes(search) ||
            (monthSearch !== -1 && dobInfo.month === monthSearch + 1)
          ))
        );
      })
      .sort((a, b) => {
        const aStarts = a.name?.toLowerCase().startsWith(search) ? 1 : 0;
        const bStarts = b.name?.toLowerCase().startsWith(search) ? 1 : 0;
        return bStarts - aStarts;
      });
  }, [debouncedSearch, members]);

  const MemberCard: React.FC<{ member: Member }> = ({ member }) => {
    const aboutValue = aboutUpdates[member._id] ?? member.about ?? '';
    const isHovered = hoveredCard === member._id;
    const dobInfo = formatDateOfBirth(member.dateOfBirth);
    
    return (
      <li 
        className="p-4 bg-white rounded-lg shadow transition-all duration-200 hover:shadow-lg border border-gray-100"
        onMouseEnter={() => setHoveredCard(member._id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
            <h3
              className="text-lg font-semibold text-gray-800"
              dangerouslySetInnerHTML={{
                __html: highlightMatch(member.name, debouncedSearch)
              }}
            />
            <div className="flex flex-wrap gap-2">
              {member.age && (
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full whitespace-nowrap">
                  {member.age} yrs
                </span>
              )}
              {dobInfo && (
                <span 
                  className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full whitespace-nowrap"
                  title={`Born in ${dobInfo.monthName}`}
                >
                  {dobInfo.formatted}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
            {member.department && (
              <div className="flex items-start">
                <svg className="w-4 h-4 mt-0.5 mr-1 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span dangerouslySetInnerHTML={{ __html: highlightMatch(member.department, debouncedSearch) }} />
              </div>
            )}
            
            {member.location && (
              <div className="flex items-start">
                <svg className="w-4 h-4 mt-0.5 mr-1 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span dangerouslySetInnerHTML={{ __html: highlightMatch(member.location, debouncedSearch) }} />
              </div>
            )}
            
            {member.gender && (
              <div className="flex items-start">
                <svg className="w-4 h-4 mt-0.5 mr-1 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>{member.gender}</span>
              </div>
            )}
          </div>

          {member.about && (
            <div className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
              <p>{member.about}</p>
            </div>
          )}

          {isHovered && (
            <div className="space-y-3 mt-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Update About</label>
                <textarea
                  className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                  placeholder="Update about section..."
                  value={aboutValue}
                  onChange={(e) => handleAboutChange(member._id, e.target.value)}
                />
                <div className="flex justify-end mt-2">
                  <button
                    onClick={() => handleUpdateAbout(member._id)}
                    disabled={
                      updatingId === member._id ||
                      !aboutUpdates[member._id] ||
                      aboutUpdates[member._id] === member.about
                    }
                    className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed"
                  >
                    {updatingId === member._id ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Saving...
                      </span>
                    ) : 'Save Changes'}
                  </button>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-200">
                {memberToDelete === member._id ? (
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">Type <span className="font-bold">"{member.name}"</span> to confirm deletion:</p>
                    <input
                      type="text"
                      value={deleteConfirm || ''}
                      onChange={(e) => setDeleteConfirm(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <div className="flex space-x-2">
                      <button
                        onClick={handleDeleteMember}
                        disabled={deleteConfirm !== member.name}
                        className={`flex-1 py-2 rounded text-white ${
                          deleteConfirm === member.name
                            ? 'bg-red-600 hover:bg-red-700'
                            : 'bg-red-300 cursor-not-allowed'
                        }`}
                      >
                        Confirm Delete
                      </button>
                      <button
                        onClick={cancelDelete}
                        className="flex-1 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => confirmDelete(member._id)}
                    className="w-full py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200"
                  >
                    Delete Member
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </li>
    );
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <ToastContainer position="top-center" autoClose={3000} />
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Team Members</h1>
        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            onClick={() => setAddNewMember(!addNewMember)} 
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            {addNewMember ? 'Cancel' : 'Add New Member'}
          </button>
          <div className="flex-1 min-w-[200px]">
            <Search 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search members..."
            />
          </div>
        </div>
      </div>

      {addNewMember && (
        <div className="mb-6 p-4 bg-white rounded-lg shadow border border-gray-200">
          <AddMember onSuccess={() => { 
            fetchMembers(); 
            setAddNewMember(false);
            toast.success('Member added successfully!');
          }} />
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <ul className="space-y-4">
          {filteredMembers.length > 0 ? (
            filteredMembers.map((member) => (
              <MemberCard key={member._id} member={member} />
            ))
          ) : (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">
                {members.length === 0 ? 'No members yet' : 'No matching members found'}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {members.length === 0 ? 'Add your first team member' : 'Try a different search term'}
              </p>
            </div>
          )}
        </ul>
      )}
    </div>
  );
};

export default Members;