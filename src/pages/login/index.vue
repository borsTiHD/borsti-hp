<template>
    <div class="flex flex-col justify-center">
        <div class="flex justify-center">
            <div class="w-full max-w-xs">
                <div class="mb-4">
                    <div class="text-white text-4xl font-bold self-center">Login</div>
                    <div class="text-white text-sm">Please sign in to continue.</div>
                </div>
                <form>
                    <input type="Email" class="m-1">
                    <input type="Passwort" class="m-1">
                    <div class="mt-2">
                        <AppButton @click="handleLogin">Sign In</AppButton>
                    </div>
                    <div class="text-white text-sm mt-6">
                        Don't have an account?
                        <router-link to="register" class="text-pink-500 font-bold ml-2">Sign Up</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import AppButton from '@/components/misc/AppButton.vue'

const handleLogin = () => {
	console.log('Button Clicked')
}
</script>
