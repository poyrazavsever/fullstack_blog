import React from 'react'

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12 gap-3">
      <p className="text-lg font-medium text-neutral-900 dark:text-neutral-200">Created By <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r dark:from-neutral-200 dark:to-amber-700 from-stone-800 to-amber-700">Poyraz Avsever</span></p>
      <div className="flex gap-3">
        <a href="https://www.instagram.com/pavori_/" target="__blank" className="hover:rotate-[360deg] transition-all duration-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="#ffffff"><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" /><path d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m1.008-5.5h-.01" /></g></svg>
        </a>

        <a href="https://www.github.com/poyrazavsever/" target="__blank" className="hover:rotate-[360deg] transition-all duration-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.517 17.113c.395.578 1.592 1.81 3.225 2.12M9.864 22C8.836 21.83 2 19.606 2 12.093C2 5.063 8.002 2 12 2c4 0 10 3.063 10 10.093c0 7.513-6.836 9.738-7.864 9.907c0 0-.21-3.417-.087-4.003c.122-.586-.294-1.528-.294-1.528c.971-.364 2.45-.884 2.945-2.282c.385-1.084.627-2.658-.45-4.138c0 0 .282-2.39-.25-2.484c-.533-.092-2.1.947-2.1.947c-.457-.13-1.476-.377-1.898-.333c-.423-.044-1.445.203-1.902.333c0 0-1.568-1.04-2.1-.947s-.25 2.484-.25 2.484c-1.077 1.48-.835 3.054-.45 4.138c.496 1.398 1.974 1.918 2.945 2.282c0 0-.416.942-.294 1.528S9.864 22 9.864 22" color="#ffffff" /></svg>
        </a>
        <a href="https://www.linkedin.com/in/poyrazavsever/" target="__blank" className="hover:rotate-[360deg] transition-all duration-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="#ffffff"><path d="M7 10v7m4-4v4m0-4a3 3 0 1 1 6 0v4m-6-4v-3M7.008 7h-.009" /><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" /></g></svg>
        </a>
      </div>
    </div>
  )
}

export default Footer