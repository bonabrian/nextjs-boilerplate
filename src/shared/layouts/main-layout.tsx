const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>This is using main layout</div>
      <div>{children}</div>
    </>
  )
}

export default MainLayout
