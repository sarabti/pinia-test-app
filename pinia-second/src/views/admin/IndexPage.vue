<template>
  <div class="bg-slate-300 h-screen w-screen">
    <div class="pt-20 w-[400px] mx-auto">
      <nav class="bg-white rounded-md shadow-md flex justify-between">
        <ul class="flex flex-row gap-2 p-2 justify-center">
          <li class="text-black bg-slate-200 hover:bg-slate-400 p-2 rounded-md">
            <router-link to="/admin">Dashboard</router-link>
          </li>
          <li class="text-black bg-slate-200 hover:bg-slate-400 p-2 rounded-md">
            <router-link to="/posts">Posts</router-link>
          </li>
          <li class="text-black bg-slate-200 hover:bg-slate-400 p-2 rounded-md">
            <router-link to="/user-activities">User Activities</router-link>
          </li>
        </ul>
        <div>
          <button class="m-2 p-1 hover:bg-slate-400 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="{1.5}"
              stroke="currentColor" className="size-6" width="30">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          </button>
        </div>
      </nav>
      <div>
        <router-view />
      </div>
    </div>
  </div>
</template>
