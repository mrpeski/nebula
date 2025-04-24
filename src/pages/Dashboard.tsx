import Section from "../components/Section";
import Layout from "../components/Layout";
import React from "react";
const RecentTransactions = React.lazy(
  () => import("../components/RecentTransactions"),
);
const CreditCardList = React.lazy(() => import("../components/CreditCardList"));
const ExpenseStatisticsChart = React.lazy(
  () => import("../components/ExpenseStatistics"),
);
const BalanceHistoryChart = React.lazy(
  () => import("../components/BalanceHistory"),
);
const WeeklyActivity = React.lazy(() => import("../components/WeeklyActivity"));
const QuickTransfer = React.lazy(() => import("../components/QuickTransfer"));

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
