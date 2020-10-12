import { shallowMount } from '@vue/test-utils'
import AutoComplete from '../../src/components/AutoComplete.vue'

describe('AutoComplete.vue', () => {
    it('renders props.placeholder when passed', () => {
        const placeholder = 'input here'
        const wrapper = shallowMount(AutoComplete, {
            propsData: { placeholder },
        })

        // just to show something in test coverage
        const inputElement = wrapper.element.querySelector('input')
        expect(inputElement && inputElement.placeholder).toEqual(placeholder)
        // @ts-ignore
        expect(wrapper.vm.hello()).toEqual('旺财')
    })
})
