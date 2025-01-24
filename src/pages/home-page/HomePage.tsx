import Card from '../../components/card/Card'
import cls from './HomePage.module.css'

export default function HomePage() {
	return (
		<div className={cls.home}>
			<h1 className={cls.title}>todos</h1>
			<Card />
		</div>
	)
}
