import Section from "../components/Section";
import Layout from "../components/Layout";

function Dashboard() {
  return (
    <Layout title="Overview">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-wrap gap-4">
          <div className="w-full sm:w-auto sm:flex-2 flex-wrap">
            <Section title="My Cards">
              <div className="flex flex-wrap gap-4 overflow-auto">
                <div className="w-full sm:flex-1 bg-gray-200 p-4">
                  Row 1, Column 1
                </div>
                <div className="w-full sm:flex-1 bg-gray-300 p-4">
                  Row 1, Column 2
                </div>
              </div>
            </Section>
          </div>
          <div className="w-full sm:w-auto sm:flex-1">
            <Section title="Recent Transactions">Row 1, Column 2</Section>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="w-full sm:w-auto sm:flex-2">
            <Section title="Weekly Activity">Row 1, Column 2</Section>
          </div>
          <div className="w-full sm:w-auto sm:flex-1">
            <Section title="Expense Statistics">Row 1, Column 2</Section>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="w-full sm:w-auto sm:flex-3">
            <Section title="Quick Transfer">Row 1, Column 2</Section>
          </div>
          <div className="w-full sm:w-auto sm:flex-5">
            <Section title="Balance History">Row 1, Column 2</Section>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
