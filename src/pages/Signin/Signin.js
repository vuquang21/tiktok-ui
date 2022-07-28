import classNames from 'classnames/bind'
import { AppleIcon, CloseIcon, FacebookIcon, GoogleIcon, InstagramIcon, LineIcon, QRCodeIcon, TwitterIcon, UserIcon } from '../../components/icons'
import { Wrapper as PopperWrapper } from '../../components/Popper'
import styles from './Signin.module.scss'
// Import the functions you need from the SDKs you need
import 'firebaseui/dist/firebaseui.css'
import { useContext, useEffect, useState } from 'react'
import { SigninContext, SigninContextProvider } from '../../context/signin'
import { SigninItem } from './SigninItem'
import { auth } from '../../firebase/config'
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth'
import { UserContext } from '../../context/user'

const cx = classNames.bind(styles)


const MENU_SIGNIN = [
	{ id: 1, title: 'Use QR code', icon: QRCodeIcon },
	{ id: 2, title: 'Use phone / email / username', icon: UserIcon },
	{ id: 3, title: 'Continue with Facebook', icon: FacebookIcon },
	{ id: 4, title: 'Continue with Google', icon: GoogleIcon },
	{ id: 5, title: 'Continue with Twitter', icon: TwitterIcon },
	{ id: 6, title: 'Continue with LINE', icon: LineIcon },
	{ id: 7, title: 'Continue with Apple', icon: AppleIcon },
	{ id: 8, title: 'Continue with Instagram', icon: InstagramIcon },


]

const MenuSignIn = () => {
	const valueSignalSignin = useContext(SigninContext)
	const dataUser = useContext(UserContext)
	onAuthStateChanged(auth, (currentUser) => {
		dataUser.handleSetUser(currentUser)
	})
	const handleClose = () => {
		valueSignalSignin.handleSignalSignin()
	}

	const handleAuthWithGoogle = (index) => {
		const provider = new GoogleAuthProvider()
		if (index === 3) {
			signInWithPopup(auth, provider).then(res => {
				dataUser.handleSetUser(res)
				valueSignalSignin.handleSignalSignin()
			}).catch(err => {
				console.log(err)
			})
		}
	}

	return (

		<SigninContextProvider>
			<div className={valueSignalSignin.signalSignin ? `w-[480px] max-h-[600px] ${cx('wrapper')}` : 'hidden'}>
				<PopperWrapper>
					<div className='w-full flex flex-col justify-center items-center'>
						<div className='w-full flex flex-row justify-end relative'>
							<button className='rounded-full px-4 py-4 bg-[#16182308] mr-4 mt-2' onClick={handleClose} >
								<CloseIcon />
							</button>
						</div>
					</div>
					<div className='w-full flex flex-col justify-center  gap-6 overflow-y-scroll'>
						<div className={`w-full inline-flex justify-center self-center pt-16 ${cx('title')}`}>Log in to TikTok</div>
						{MENU_SIGNIN.map((item, index) => (
							<SigninItem
								onClick={() => handleAuthWithGoogle(index)}
								key={item.id}
								title={item.title}
								icon={<item.icon />}
								id={item.id}
								className='flex self-center'
							/>
						))}
					</div>
					<div className='w-full flex flex-row justify-center items-center border-t-[1px] border-[#1618231f] mt-4 leading-[64px]'>
						<span className='font-thin'>Don’t have an account? <button className={cx('btn-signup')}>Sign up</button></span>
					</div>
				</PopperWrapper>
			</div>
		</SigninContextProvider>

	)
}

export default MenuSignIn