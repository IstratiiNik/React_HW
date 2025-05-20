import React, { useContext } from 'react'
import { LanguageContext } from '../LanguageContext/LanguageContext'

const LanguageSwitcher = () => {
	const {toggleLangusge, language} = useContext(LanguageContext);
	
	
	return (
	 <div>LanguageSwitcher</div>
  )
}

export default LanguageSwitcher