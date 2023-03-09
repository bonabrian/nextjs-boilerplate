const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>This is using auth layout</div>
      <div>{children}</div>
    </>
  )
}

export default AuthLayout
