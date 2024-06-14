<script lang="ts" setup></script>

<template>
    <main>
        <div class="min-h-screen bg-gradient-to-r dark:from-purple-950 dark:to-black text-slate-900 from-purple-500 to-white dark:text-white">
            <header class="flex justify-between items-center p-6">
                <NuxtLink to="https://github.com/dtczelo/nuxt-base-app">
                    <Button size="icon">
                        <Icon name="uil:github" />
                    </Button>
                </nuxtLink>
                <ThemeSwitcher />
            </header>
            <main
                class="flex flex-col items-center justify-center text-center px-6 py-12 md:flex-row md:text-left md:justify-between md:px-12 lg:px-24"
            >
                <div class="max-w-3xl">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Nuxt 3 SaaS starter template
                    </h1>
                    <p class="text-lg md:text-xl mb-8">
                        With Nuxt 3, you can build powerful web applications
                    </p>
                </div>
                <div class="mt-12 md:mt-0">
                    

                </div>
            </main>
        </div>
    </main>
</template>

<style lang="css" scoped></style>
