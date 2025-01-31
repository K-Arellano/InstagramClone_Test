import React, { useState, useEffect } from 'react';
import InstagramSVG from './svgComps/InstagramSVG';

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [authError, setAuthError] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [focusedField, setFocusedField] = useState<{ email: boolean; password: boolean }>({
    email: false,
    password: false,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 375);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const validateForm = () => {
    const newErrors = { email: '', password: '' };
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      if (formData.password === 'correctpassword') {
        console.log('Logging in:', formData);
        setAuthError('');
      } else {
        setAuthError('Sorry, your password was incorrect. Please double-check your password.');
      }
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div
      className="form-container min-w-[320px] max-w-[320px] flex flex-col items-center border md:border-gray-300 border-transparent bg-white p-6"
      style={{ marginTop: isMobile ? '30%' : '0' }}
    >
      <div className="w-44 mb-7 mt-7">
  <InstagramSVG disableDarkMode={true} white={false} />
</div>

      <form className="w-full space-y-4" onSubmit={handleSubmit}>
        {/* Email Input */}
        <div className="relative">
          <input
            type="text"
            id="email"
            className="peer w-full border border-gray-300 bg-[#fafafa] px-2 pt-3 pb-1 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            onFocus={() => setFocusedField({ ...focusedField, email: true })}
            onBlur={() => setFocusedField({ ...focusedField, email: false })}
            placeholder=" " // Enables floating label effect
          />
          <label
            htmlFor="email"
            className={`absolute left-2 text-gray-500 text-[10px] transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-[9px] peer-focus:text-blue-500`}
          >
            Phone number, username, or email
          </label>
        </div>
        {errors.email && <p className="text-[16px] text-red-500 mt-1">{errors.email}</p>}

        {/* Password Input */}
        <div className="relative">
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            className="peer w-full border border-gray-300 bg-[#fafafa] px-2 pt-3 pb-1 text-xs rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            onFocus={() => setFocusedField({ ...focusedField, password: true })}
            onBlur={() => setFocusedField({ ...focusedField, password: false })}
            placeholder=" "
          />
          <label
            htmlFor="password"
            className={`absolute left-2 text-gray-500 text-[10px] transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-[9px] peer-focus:text-blue-500`}
          >
            Password
          </label>
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-700 text-[14px] font-semibold"
          >
            {passwordVisible ? 'Hide' : 'Show'}
          </button>
        </div>
        {errors.password && <p className="text-[10px] text-red-500 mt-1">{errors.password}</p>}

        <button
          type="submit"
          className="w-full bg-[#4cb5f9] py-1.5 text-xs text-white font-semibold rounded-lg"
          disabled={!formData.email || !formData.password}
        >
          Log in
        </button>
      </form>

      <div className="flex items-center w-full my-2">
        <hr className="w-full border-stone-300" />
        <p className="mx-2 text-xs text-gray-600">OR</p>
        <hr className="w-full border-stone-300" />
      </div>

      <button className="mt-2 w-full flex items-center justify-center gap-1 py-1 text-sm text-blue-450 font-semibold font-facebook rounded-lg">
        <div className="w-4 h-4 rounded-full flex items-center justify-center overflow-hidden">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook logo" />
        </div>
          Log in with Facebook
      </button>



      {authError && <p className="text-[10px] text-red-500 mt-2 text-center">{authError}</p>}

      <p className="text-xs mt-2 text-blue-900 cursor-pointer">Forgot password?</p>
    </div>
  );
};

export default LoginForm;
