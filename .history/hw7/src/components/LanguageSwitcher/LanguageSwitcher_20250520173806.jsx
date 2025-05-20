import React, { useContext } from 'react'
import { LanguageContext } from '../LanguageContext/LanguageContext'

const LanguageSwitcher = () => {
	const {toggleLan} = useContext();
	
	
	return (
	 <div>LanguageSwitcher</div>
  )
}

export default LanguageSwitcher