import { Navigate, Route, Routes } from 'react-router-dom'

import {Homepage} from './pages/Homepage'
import {About} from './pages/Aboutpage'
import {Blogpage} from './pages/Blogpage'
import {Notfoundpage} from './pages/Notfoundpage'

import { Layout } from './components/Layout'
import { Singlepage } from './components/Singlepage'
import { Createpost } from './pages/Createpost'
import { Editpost } from './pages/Editpost'
import { Loginpage } from './pages/Loginpage'
import { RequireAuth } from './hoc/RequireAuth'
import { AuthProvider } from './hoc/AuthProvider'


const App = () => {
  return (
    <>
    <AuthProvider>
      <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Homepage/> } />
              <Route path="about" element={<About/> } />
              <Route path="about-us" element={<Navigate to="/about" replace/> } />
              <Route path="posts" element={<Blogpage/> } />
              <Route path="posts/:id" element={<Singlepage/> } />
              <Route path="posts/:id/edit" element={<Editpost/> } />
              <Route path="posts/new" element={
                <RequireAuth>
                  <Createpost />
                </RequireAuth>
              } />
              <Route path="login" element={<Loginpage/> } />
              <Route path="*" element={<Notfoundpage/> } />
            </Route>
      </Routes>
   </AuthProvider>
   </>
  )
}

export default App