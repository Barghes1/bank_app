
// eslint-disable-next-line react/prop-types
const Button = ({ styles }) => (
  <button type="button" className={`font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}>
    <div className='w-[100%] h-[100%] bg-blue-gradient py-4 px-6 rounded-[10px]'>
      Get Started
    </div>
  </button>
);

export default Button;