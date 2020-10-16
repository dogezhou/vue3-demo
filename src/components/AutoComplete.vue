<template>
    <div class="autoComplete">
        <input
            class="autoComplete-input"
            type="text"
            :placeholder="placeholder"
        />
    </div>
</template>

<script lang="ts">
export default {
    name: 'AutoComplete',
    props: {
        placeholder: {
            type: String,
            default: '',
        },
    },
    methods: {
        hello() {
            interface Dog {
                name: string
            }
            const a: Dog = {
                name: '旺财',
            }
            return a.name
        },
        wa() {
            console.log('unit test missed!!')
        },
    },
}
</script>

<style lang="scss" scoped>
$primary: #1890ff;
$color: rgba(black, 0.6);

.autoComplete {
    &-input {
        color: $color;
        padding: 8px 12px;
        border: 1px solid rgba($color, 0.2);
        border-radius: 4px;
        transition: all 200ms ease-in-out;
        &:hover {
            border: 1px solid $primary;
        }
        &:focus {
            box-shadow: 0 0 2px 2px rgba($primary, 0.2);
            border: 1px solid $primary;
            outline: none;
        }
    }
}
</style>
