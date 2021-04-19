import React from 'react';
import { userType } from '../../redux/user/useTypes';
import { AdminHomepageContainer } from "./admin-homepage.styles";

interface AdminHomepageProps {
    currentUser: userType
}
const AdminHomepage: React.FC <AdminHomepageProps> = ({currentUser}) => {

    return (
        <AdminHomepageContainer>
            welcome admin
        </AdminHomepageContainer>
    );
};

export default AdminHomepage;