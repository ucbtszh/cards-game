<template>
    <div id="end">
        Thank you very much for participating in this study!<br><br>
        You can now close this window.
    </div>
</template>

<script>
export default {
    mounted () {
        window.scrollTo(0, 0)
        }
}
</script>