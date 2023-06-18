
import './Rectangle1.css'

export default function NavBar({showNav, setShowNav}) {


  const showNavStyles = {
    showNav:{
      left:'0%'
    },
    hideNav:{
      left:'-180px'
    },
    leftArr:{
      transform:'rotateZ(0deg)'
    },
    righttArr:{
      transform:'rotateZ(180deg)'
    }
    
  }
  const toggleNav = () => setShowNav(! showNav);

  return (
    <div className='navbar' style={showNav === true ? showNavStyles.showNav : showNavStyles.hideNav}>
      <div className='logo'>
        <div className='cir-vec'>
          <span className='tc'></span>
          <span className='rc'></span>
          <span className='lc'></span>
        </div>
        <p>Project M.</p>
        <div className='slide-btn' onClick={toggleNav} style={showNav === true ? showNavStyles.leftArr : showNavStyles.righttArr  }>
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.49999 15.225C7.34166 15.225 7.18333 15.1667 7.05833 15.0417L1.62499 9.60832C0.741661 8.72499 0.741661 7.27499 1.62499 6.39165L7.05833 0.958319C7.29999 0.716652 7.69999 0.716652 7.94166 0.958319C8.18333 1.19999 8.18333 1.59999 7.94166 1.84165L2.50833 7.27499C2.10833 7.67499 2.10833 8.32499 2.50833 8.72499L7.94166 14.1583C8.18333 14.4 8.18333 14.8 7.94166 15.0417C7.81666 15.1583 7.65833 15.225 7.49999 15.225Z" fill="#787486" />
          </svg>
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.49999 15.225C7.34166 15.225 7.18333 15.1667 7.05833 15.0417L1.62499 9.60832C0.741661 8.72499 0.741661 7.27499 1.62499 6.39165L7.05833 0.958319C7.29999 0.716652 7.69999 0.716652 7.94166 0.958319C8.18333 1.19999 8.18333 1.59999 7.94166 1.84165L2.50833 7.27499C2.10833 7.67499 2.10833 8.32499 2.50833 8.72499L7.94166 14.1583C8.18333 14.4 8.18333 14.8 7.94166 15.0417C7.81666 15.1583 7.65833 15.225 7.49999 15.225Z" fill="#787486" />
          </svg>

        </div>
      </div>
      <div className='menu'>

        <span className='h-icon'>
          <svg width="84" height="24" viewBox="0 0 84 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10.75H5C2.58 10.75 1.25 9.42 1.25 7V5C1.25 2.58 2.58 1.25 5 1.25H7C9.42 1.25 10.75 2.58 10.75 5V7C10.75 9.42 9.42 10.75 7 10.75ZM5 2.75C3.42 2.75 2.75 3.42 2.75 5V7C2.75 8.58 3.42 9.25 5 9.25H7C8.58 9.25 9.25 8.58 9.25 7V5C9.25 3.42 8.58 2.75 7 2.75H5Z" fill="#787486" />
            <path d="M19 10.75H17C14.58 10.75 13.25 9.42 13.25 7V5C13.25 2.58 14.58 1.25 17 1.25H19C21.42 1.25 22.75 2.58 22.75 5V7C22.75 9.42 21.42 10.75 19 10.75ZM17 2.75C15.42 2.75 14.75 3.42 14.75 5V7C14.75 8.58 15.42 9.25 17 9.25H19C20.58 9.25 21.25 8.58 21.25 7V5C21.25 3.42 20.58 2.75 19 2.75H17Z" fill="#787486" />
            <path d="M19 22.75H17C14.58 22.75 13.25 21.42 13.25 19V17C13.25 14.58 14.58 13.25 17 13.25H19C21.42 13.25 22.75 14.58 22.75 17V19C22.75 21.42 21.42 22.75 19 22.75ZM17 14.75C15.42 14.75 14.75 15.42 14.75 17V19C14.75 20.58 15.42 21.25 17 21.25H19C20.58 21.25 21.25 20.58 21.25 19V17C21.25 15.42 20.58 14.75 19 14.75H17Z" fill="#787486" />
            <path d="M7 22.75H5C2.58 22.75 1.25 21.42 1.25 19V17C1.25 14.58 2.58 13.25 5 13.25H7C9.42 13.25 10.75 14.58 10.75 17V19C10.75 21.42 9.42 22.75 7 22.75ZM5 14.75C3.42 14.75 2.75 15.42 2.75 17V19C2.75 20.58 3.42 21.25 5 21.25H7C8.58 21.25 9.25 20.58 9.25 19V17C9.25 15.42 8.58 14.75 7 14.75H5Z" fill="#787486" />
          </svg>
          <p>Home</p>
        </span>
        <span className='m-icon'>
          <svg width="116" height="24" viewBox="0 0 116 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.9965 11H16.0054" stroke="#787486" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11.9955 11H12.0045" stroke="#787486" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.99451 11H8.00349" stroke="#787486" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p>Messages</p>
        </span>
        <span className='t-icon'>
          <svg width="83" height="24" viewBox="0 0 83 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.37 8.88H17.62" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.38 8.88L7.13 9.63L9.38 7.38" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.37 15.88H17.62" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.38 15.88L7.13 16.63L9.38 14.38" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p>Tasks</p>
        </span>
        <span className='me-icon'>
          <svg width="111" height="24" viewBox="0 0 111 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.16 10.87C9.06 10.86 8.94 10.86 8.83 10.87C6.45 10.79 4.56 8.84 4.56 6.44C4.56 3.99 6.54 2 9 2C11.45 2 13.44 3.99 13.44 6.44C13.43 8.84 11.54 10.79 9.16 10.87Z" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.41 4C18.35 4 19.91 5.57 19.91 7.5C19.91 9.39 18.41 10.93 16.54 11C16.46 10.99 16.37 10.99 16.28 11" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4.15997 14.56C1.73997 16.18 1.73997 18.82 4.15997 20.43C6.90997 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.91997 12.73 4.15997 14.56Z" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18.34 20C19.06 19.85 19.74 19.56 20.3 19.13C21.86 17.96 21.86 16.03 20.3 14.86C19.75 14.44 19.08 14.16 18.37 14" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p>Members</p>
        </span>
        <span className='s-icon'>
          <svg width="103" height="24" viewBox="0 0 103 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M2 12.88V11.12C2 10.08 2.85 9.22 3.9 9.22C5.71 9.22 6.45 7.94 5.54 6.37C5.02 5.47 5.33 4.3 6.24 3.78L7.97 2.79C8.76 2.32 9.78 2.6 10.25 3.39L10.36 3.58C11.26 5.15 12.74 5.15 13.65 3.58L13.76 3.39C14.23 2.6 15.25 2.32 16.04 2.79L17.77 3.78C18.68 4.3 18.99 5.47 18.47 6.37C17.56 7.94 18.3 9.22 20.11 9.22C21.15 9.22 22.01 10.07 22.01 11.12V12.88C22.01 13.92 21.16 14.78 20.11 14.78C18.3 14.78 17.56 16.06 18.47 17.63C18.99 18.54 18.68 19.7 17.77 20.22L16.04 21.21C15.25 21.68 14.23 21.4 13.76 20.61L13.65 20.42C12.75 18.85 11.27 18.85 10.36 20.42L10.25 20.61C9.78 21.4 8.76 21.68 7.97 21.21L6.24 20.22C5.33 19.7 5.02 18.53 5.54 17.63C6.45 16.06 5.71 14.78 3.9 14.78C2.85 14.78 2 13.92 2 12.88Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p>Setting</p>
        </span>
      </div>
      <span className='partition'>
        <svg width="224" height="1" viewBox="0 0 224 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0.5H224" stroke="#DBDBDB" />
        </svg>
      </span>

      <div className='my-projects'>
        <span className='heading'>
          <p>my projects</p>
          <svg width="203" height="16" viewBox="0 0 203 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M192.333 8H197.667" stroke="#787486" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M195 10.6667V5.33333" stroke="#787486" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M193 14.6667H197C200.333 14.6667 201.667 13.3333 201.667 10V6C201.667 2.66667 200.333 1.33333 197 1.33333H193C189.667 1.33333 188.333 2.66667 188.333 6V10C188.333 13.3333 189.667 14.6667 193 14.6667Z" stroke="#787486" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>

        <span className='m-prj'>
            <span className='m-disc'></span>
            <p>Mobile App</p>
            <span className='menu-btn'>...</span>
        </span>
        <span className='w-prj'>
            <span className='w-disc'></span>
            <p>Website Redesign</p>
            <span className='menu-btn'>...</span>
        </span>
        <span className='d-prj'>
            <span className='d-disc'></span>
            <p>Design System</p>
            <span className='menu-btn'>...</span>
        </span>
        <span className='wi-prj'>
            <span className='wi-disc'></span>
            <p>Wireframes</p>
            <span className='menu-btn'>...</span>
        </span>


      </div>
      <div className='thoughts'>
        <span className='bulb'>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.21 4.36C15.17 2.26 13.16 0.709996 10.83 0.199996C8.38997 -0.340004 5.88997 0.239996 3.97997 1.78C2.05997 3.31 0.969971 5.6 0.969971 8.05C0.969971 10.64 2.51997 13.35 4.85997 14.92V15.75C4.84997 16.03 4.83997 16.46 5.17997 16.81C5.52997 17.17 6.04997 17.21 6.45997 17.21H11.59C12.13 17.21 12.54 17.06 12.82 16.78C13.2 16.39 13.19 15.89 13.18 15.62V14.92C16.28 12.83 18.23 8.42 16.21 4.36Z" fill="#FBCB18"/>
          </svg>
          <span className='bulb-glow'></span>
        </span>
        <p className='thought-heading'>Thoughts Time</p>
        <p className='thought-para'>
          We don't have any notice for you, till then you can share your thoughts with your peers.
        </p>
        <button>Write a message</button>
      </div>
    </div>
  )
}
