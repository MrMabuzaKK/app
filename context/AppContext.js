import React, { useState, createContext } from 'react'

export const AppContext = createContext({})

const AppProvider = ({children}) => {
	const [ user, setUser ] = useState({})
	const [ modalVisible, setModalVisible ] = useState(false)
	return (
		<AppContext.Provider value={{ user, setUser, modalVisible, setModalVisible }}>
			{children}
		</AppContext.Provider>
	)
}

export { AppProvider }


