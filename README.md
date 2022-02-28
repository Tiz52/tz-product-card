# TZ-Product-Card

Este es un paquete de pruebas de despliegue en NPM

## Carlos Murillo

## Ejemplo
```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} form 'tz-product-card'
```

```
		<ProductCard 
			product={product}
				initialValues={{
					count: 6
					//maxCount: 10,
				}}
		>
		{
			({ reset, increaseBy, isMaxCountReached, count }) => 
				(
					<>
						<ProductImage />
						<ProductTitle />
						<ProductButtons />
					</>
				)
		}
		</ProductCard>

```