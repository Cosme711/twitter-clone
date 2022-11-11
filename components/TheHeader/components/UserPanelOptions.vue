<template>
  <div
    class="absolute border border-gray-border rounded-2xl top-12 right-0 px-4 py-6 w-60"
  >
    <div class="space-y-4 pb-6 border-b-2 border-gray-border text-gray-dark">
      <div
        class="font-medium space-x-2 flex items-center hover:bg-gray-background p-2 rounded-lg cursor-pointer"
      >
        <BaseIconBase name="Logout" size="w-7 h-7" class="ml-1">
          <AssetsIconsUserIcon />
        </BaseIconBase>
        <p>My Profile</p>
      </div>
      <div
        class="font-medium space-x-2 flex items-center hover:bg-gray-background p-2 rounded-lg cursor-pointer"
      >
        <BaseIconBase name="Logout" size="w-7 h-7" class="ml-1">
          <AssetsIconsUserGroupIcon />
        </BaseIconBase>
        <p>Group Chat</p>
      </div>
      <div
        class="font-medium space-x-2 flex items-center hover:bg-gray-background p-2 rounded-lg cursor-pointer"
      >
        <BaseIconBase name="Logout" size="w-7 h-7" class="ml-1">
          <AssetsIconsSettingIcon />
        </BaseIconBase>
        <p>Settings</p>
      </div>
    </div>
    <div
      class="text-red font-medium space-x-2 flex items-center mt-6 p-2 cursor-pointer"
    >
      <BaseIconBase name="Logout" size="w-7 h-7" class="ml-1">
        <AssetsIconsLogoutIcon />
      </BaseIconBase>
      <p>Logout</p>
    </div>
  </div>
</template>
