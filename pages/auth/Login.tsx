import React,{useState} from 'react'

type Props = {}

const Login = (props: Props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passValid, setPassValid] = useState(true)


  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
   
  }
  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    setPassValid(true)

  }

  const formHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
 
    if(password.length <= 5){
      setPassValid(false)
      return
    }

    setPassValid(true)
    setEmail('')
    setPassword('')
    

  }
  return (
    <>
      <form onSubmit={formHandler}>
        <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-300'>
          <div className='flex flex-col items-center justify-center w-full flex-1 px-2 text-center'>
            <div className='bg-white rounded-2xl shadow-2xl w-1/3'>
              <div className='py-10'>
              <h1 className='text-3xl font-bold text-green-500 mb-2'> Login in to Account </h1>
              </div>
              <div className='flex flex-col items-center mb-3 '>
                <div className='bg-gray-200 w-64 p-2 rounded-lg'>
                    <input type="email" name='email' placeholder='Email' className='bg-gray-200 outline-none text-sm flex-1 ' value={email} onChange={emailHandler} />
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <div className='bg-gray-200 w-64 p-2 rounded-lg'>
                    <input type="password" name='password' placeholder='Password' className='bg-gray-200 outline-none text-sm flex-1 ' value={password} onChange={passwordHandler} />
                </div>
                {!passValid && <p className='text-red-500'>Passwoard must be 6 digits</p> }
              </div>
              <div className='py-10'>
                <button className=' border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white'> Sing In</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Login