import { ContentBody, PageTitle } from "../../components/layout/helpers";
import Layout from "../../components/layout/layout";
import { VerticalSpacer } from "../../components/utils";

const Users = () => {
  return (
    <Layout>
      <ContentBody>
        <PageTitle>Users</PageTitle>
        <VerticalSpacer size={40} />
        
      </ContentBody>
    </Layout>
  );
};

export default Users;
