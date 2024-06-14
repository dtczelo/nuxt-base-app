<script setup lang="ts">
const colorMode = useColorMode();
const icon = ref("");
const themes = ["system", "light", "dark"];

const themesIcon: Record<string, string> = {
    system: "mdi:desktop-mac",
    light: "mdi:white-balance-sunny",
    dark: "mdi:moon-waning-crescent",
};

const toggleTheme = () => {
    const currentIndex = themes.indexOf(colorMode.preference);
    const nextIndex = (currentIndex + 1) % themes.length;
    colorMode.preference = themes[nextIndex];
    icon.value = themesIcon[colorMode.preference];
};

onMounted(() => {
    colorMode.preference = "system";
    icon.value = themesIcon[colorMode.preference];
});
</script>

<template>
    <Button @click="toggleTheme" size="icon" title="Select your theme">
        <Icon :name="icon" />
    </Button>
</template>

<style></style>
