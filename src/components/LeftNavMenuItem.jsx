const LeftNavMenuItem = ({text, icon, className, action}) => {
  return (
    <div className={`text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg`} onClick={action}>
      <span className={"md:text-2xl text-xl mr-5 text-red-600 " + className}>{icon}</span>
      {text}
    </div>
  )
}

export default LeftNavMenuItem