import React, { useContext } from 'react'
import { LanguageContext } from '../LanguageContext/LanguageContext'

const LanguageSwitcher = () => {
	const {toggleLangusge, language} = useContext();
	
	
	return (
	 <div>LanguageSwitcher</div>
  )
}

export default LanguageSwitcher