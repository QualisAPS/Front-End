import RegisterForm from './components/RegisterForm';

export default function NewAccountPage() {
  return (
    <div
      className="flex justify-center items-center"
      style={{ height: '100vh' }}
    >
      <main>
        <RegisterForm />
      </main>
    </div>
  );
}
