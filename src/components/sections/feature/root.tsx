
const FeatureRoot = ({ children }: { children: React.ReactNode }) => {
  return ( 
    <ul className="grid grid-cols-1 gap-10">
      {children}
    </ul>
  );
}
 
export default FeatureRoot;