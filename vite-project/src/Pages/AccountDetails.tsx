import React, { useEffect, useState } from "react";
import { auth, db } from "../Components/firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function AccountDetails() {
    const [userDetails, setUserDetails] = useState<any>(null);
    const navigate = useNavigate();

    // Add logout function

    const fetchUserData = async (uid: string) => {
        try {
            const docRef = doc(db, "users", uid);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
                setUserDetails(docSnap.data());
                console.log("User data:", docSnap.data());
            } else {
                toast.error("User data not found");
                console.log("No user document found for UID:", uid);
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
            toast.error("Failed to fetch user data");
            navigate('/login');
        }
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                console.log("Authenticated user:", user.uid);
                fetchUserData(user.uid);
            } else {
                console.log("No authenticated user");
                navigate('/login');
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
        {userDetails ? (
          <div className="space-y-6">
            {/* Header with welcome and logout */}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Welcome {userDetails.name || userDetails.firstName} 🙏
                </h3>
                <p className="text-gray-600">Member since {new Date(userDetails.createdAt).toLocaleDateString()}</p>
              </div>

            </div>
      
            {/* User details grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-lg text-gray-700 mb-3 border-b pb-2">Personal Information</h4>
                <div className="space-y-2">
                  <p><span className="font-medium text-gray-600">Email:</span> {userDetails.email}</p>
                  {userDetails.phone && (
                    <p><span className="font-medium text-gray-600">Phone:</span> {userDetails.phone}</p>
                  )}
                  {userDetails.address && (
                    <p><span className="font-medium text-gray-600">Address:</span> {userDetails.address}</p>
                  )}
                </div>
              </div>
      
              {/* Account Details */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-lg text-gray-700 mb-3 border-b pb-2">Account Details</h4>
                <div className="space-y-2">
                  <p><span className="font-medium text-gray-600">Member ID:</span> {userDetails.memberId || 'N/A'}</p>
                  <p><span className="font-medium text-gray-600">Last Login:</span> {new Date(userDetails.lastLogin).toLocaleString()}</p>
                  <p><span className="font-medium text-gray-600">Account Status:</span> 
                    <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                      userDetails.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {userDetails.status || 'active'}
                    </span>
                  </p>
                </div>
              </div>
      
              {/* Church Involvement */}
              {userDetails.groups && (
                <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
                  <h4 className="font-semibold text-lg text-gray-700 mb-3 border-b pb-2">Church Involvement</h4>
                  <div className="flex flex-wrap gap-2">
                    {userDetails.groups.map((group: string) => (
                      <span key={group} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {group}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-32">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
}

export default AccountDetails;


