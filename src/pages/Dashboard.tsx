import Section from "../components/Section";
import Layout from "../components/Layout";
import RecentTransactions from "../components/RecentTransactions";
import CreditCardList from "../components/CreditCardList";
import ExpenseStatisticsChart from "../components/ExpenseStatistics";
import BalanceHistoryChart from "../components/BalanceHistory";
import WeeklyActivity from "../components/WeeklyActivity";
import QuickTransfer from "../components/QuickTransfer";

function Dashboard() {
  return (
    <Layout title="Overview">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-wrap gap-4">
          <div className="w-full sm:w-2/3 sm:flex-2 flex-wrap">
            <CreditCardList />
          </div>
          <div className="w-full sm:w-1/3 sm:flex-1">
            <Section title="Recent Transactions">
              <RecentTransactions />
            </Section>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="w-full sm:w-auto sm:flex-2">
            <Section title="Weekly Activity">
              <WeeklyActivity />
            </Section>
          </div>
          <div className="w-full sm:w-auto sm:flex-1">
            <Section title="Expense Statistics">
              <ExpenseStatisticsChart />
            </Section>
          </div>
        </div>
        <div className="w-full flex flex-wrap gap-4">
          <div className="w-full sm:w-2/5 sm:flex-3">
            <Section title="Quick Transfer">
              <QuickTransfer />
            </Section>
          </div>
          <div className="w-full sm:w-3/5 sm:flex-5">
            <Section title="Balance History">
              <BalanceHistoryChart />
            </Section>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
