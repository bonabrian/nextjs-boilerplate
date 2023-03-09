import { AuthLayout } from '@/shared/layouts'
import type { NextPageWithLayout } from '@/shared/types'

const LoginPage: NextPageWithLayout = () => {
  return <div>Login</div>
}

LoginPage.getLayout = (page: React.ReactElement) => (
  <AuthLayout>{page}</AuthLayout>
)

export default LoginPage
