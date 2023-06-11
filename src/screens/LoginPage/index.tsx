import FormLogin from './components/FormLogin';

export default function LoginPage() {
  return (
    <div
      className="flex justify-center items-center"
      style={{ height: '100vh' }}
    >
      <main>
        <FormLogin />
      </main>
    </div>
  );
}
