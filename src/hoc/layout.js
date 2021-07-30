import Header from './_header'
import Footer from './_footer'


const Layout = ({ children }) => {
	return (
		<>
			<Header />	
				{children}
			<Footer />
		</>
	)
}

export default Layout
