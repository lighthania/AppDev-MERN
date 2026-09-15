import Card from "./components/identityCard";
function App() {
 return (
 <div className="flex flex-wrap justify-center">
 <Card
 title="React Basics"
 description="Learn how to create components and props."
 image="https://picsum.photos/300/200"
 />
 <Card
 title="Reusable Components"
 description="Build flexible components for scalability."
 image="https://picsum.photos/300/201"
 />
 <Card
 title="Modern UI Development"
 description="Combine React with Tailwind CSS for fast design."
 image="https://picsum.photos/300/202"
 />
 </div>
 );
}
export default App;