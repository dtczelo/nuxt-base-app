<script lang="ts" setup>
const { locale, setLocale } = useI18n();
const lang = ref(locale);

watch(lang, (value) => {
    setLocale(value);
});

</script>

<template>
<div>
    <Select v-model="lang">
        <SelectTrigger class="w-[55px]">
            <SelectValue :placeholder="locale" />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
                <SelectItem value="en"> en </SelectItem>
                <SelectItem value="fr"> fr </SelectItem>
            </SelectGroup>
        </SelectContent>
    </Select>
</div>
</template>
