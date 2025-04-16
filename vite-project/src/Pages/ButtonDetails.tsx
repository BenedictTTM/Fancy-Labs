import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-12 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              <span className="text-yellow-400 font-sans">FANCY</span> Labs<br />
              Ghana Limited
            </h2>
            <p className="text-gray-400 mt-2">
              Transforming visionary ideas into digital excellence through two seamless steps:
            </p>
            <div className="pl-4 border-l-2 border-yellow-400 space-y-2">
              <p><span className="text-yellow-400 font-medium">Step 1:</span> Share your brilliant vision</p>
              <p><span className="text-yellow-400 font-medium">Step 2:</span> Let our experts bring it to life</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-yellow-400 font-medium min-w-24">Headquarters:</span>
                <span>Accra, Ghana</span>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-400 font-medium min-w-24">Available For You:</span>
                <span>12:00 AM - 12:00 AM GMT +0</span>
              </div>
            </div>

            <div className="flex space-x-3">
              <SocialButton icon={<Facebook size={18} />} />
              <SocialButton icon={<Instagram size={18} />} />
              <SocialButton icon={<Twitter size={18} />} />
              <SocialButton icon={<Linkedin size={18} />} />
              <SocialButton icon={<Phone size={18} />} />
              <SocialButton icon={<Mail size={18} />} />
            </div>
          </div>

          {/* Company Links */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-lg font-semibold text-white mb-4">Discover Us</h3>
            <ul className="space-y-3">
              <FooterLink href="#" text="Our Story" />
              <FooterLink href="#" text="Mission & Vision" />
              <FooterLink href="#" text="Core Solutions" />
              <FooterLink href="#" text="Get In Touch" />
            </ul>
          </div>

          {/* Services Links */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-lg font-semibold text-white mb-4">Expertise</h3>
            <ul className="space-y-3">
              <FooterLink href="#" text="Experience Design" />
              <FooterLink href="#" text="Custom Development" />
              <FooterLink href="#" text="Strategic Advisory" />
            </ul>
          </div>

          {/* Resources Links */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-lg font-semibold text-white mb-4">Knowledge Hub</h3>
            <ul className="space-y-3">
              <FooterLink href="#" text="Trust & Security" />
              <FooterLink href="#" text="Legal Framework" />
              <FooterLink href="#" text="Insights & Articles" />
              <FooterLink href="#" text="Common Questions" />
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-sm">
          <p>Crafting digital excellence since 2025 | &copy; {new Date().getFullYear()} Fancy Labs Ghana Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialButton({ icon }: { icon: React.ReactNode }) {
  return (
    <a 
      href="#" 
      className="w-10 h-10 rounded-full flex items-center justify-center border border-yellow-600/30 text-yellow-400 hover:bg-yellow-500 hover:text-gray-900 transition-colors duration-300"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <li>
      <a 
        href={href} 
        className="hover:text-yellow-400 transition-colors duration-200"
      >
        {text}
      </a>
    </li>
  );
}
