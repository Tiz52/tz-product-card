import React from 'react'
import renderer from 'react-test-renderer'
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/product';



describe('ProductTitle', () => {

	test('debe de mostrar el componente correctamente con el título personalizado', () => {

		const wrapper = renderer.create(
			<ProductTitle title='Custom Product'/>
		)

		expect(wrapper.toJSON()).toMatchSnapshot();
		
	});

	test('debe de mostrar el component con el nombre del producto', ()=> {

		const wrapper = renderer.create(
			<ProductCard product={product1}>
				{
					() => <ProductTitle/>		
				}
			</ProductCard>
		)

		expect(wrapper.toJSON()).toMatchSnapshot();

	});

});
