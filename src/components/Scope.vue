<template>
<div>
  <slot name="header" value="123" a="456"></slot>
  <slot name="main" b="789" d="1023"></slot>
</div>
</template>

<script>
export default {
name: "Scope"
}
</script>

<style scoped>

</style>
