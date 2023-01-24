import { ReactNode, useEffect, useState } from "react";
import { Button } from "../../components/button/button";
import { LongArrowLeft } from "../../components/icons";
import { ContentBody, PageTitle } from "../../components/layout/helpers";
import Layout from "../../components/layout/layout";
import { HorizontalSpacer, VerticalSpacer } from "../../components/utils";
import { UserSummary } from "./summary";
import axios from "axios";
import styles from "./userDetails.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { formatAmount } from "../../utils";
import { AdditionalInformation } from "./additionalInfo";

export interface ObjectLiteral {
  [key: string]: any;
}

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const fetchUserData = async () => {
    try {
      const res = await axios.get(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
      );
      localStorage.setItem("userDetails", JSON.stringify(res.data));
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  const userData: ObjectLiteral = JSON.parse(
    localStorage.getItem("userDetails") ?? "{}"
  );

  return (
    <Layout>
      <ContentBody>
        <div
          className={styles.backButton}
          onClick={() => navigate("/dashboard/users")}
        >
          <LongArrowLeft /> <HorizontalSpacer size={14.41} />
          <span>Back to Users</span>
        </div>
        <VerticalSpacer size={13} />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className={styles.pageHeader}>
              <PageTitle data-testid="userDetailsHeader">
                User Details
              </PageTitle>
              <div className={styles.actions}>
                <Button variant="outlined" className={styles.blackListUser}>
                  BLACKLIST USER
                </Button>
                <Button variant="outlined">ACTIVATE USER</Button>
              </div>
            </div>
            <VerticalSpacer size={30} />
            <UserSummary userData={userData} />
            <VerticalSpacer size={30} />
            <AdditionalInformation userData={userData} />
          </>
        )}
      </ContentBody>
    </Layout>
  );
};

export default UserDetails;
