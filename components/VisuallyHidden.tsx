type PropsType = {
  children: React.ReactNode;
};

function VisuallyHidden({ children }: PropsType) {
  return <span className="sr-only">{children}</span>;
}
export default VisuallyHidden;
