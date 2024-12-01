import { Table } from 'react-bootstrap';
import { createClaimsTable } from '../utils/claimUtils';

import '../styles/App.css';

export const IdTokenData = (props) => {
    const tokenClaims = createClaimsTable(props.idTokenClaims);

    // Extract roles from the idTokenClaims
    const roles = props.idTokenClaims?.roles || []; // Default to an empty array if roles don't exist

    // Create table rows for token claims
    const tableRow = Object.keys(tokenClaims).map((key) => {
        return (
            <tr key={key}>
                {tokenClaims[key].map((claimItem, idx) => (
                    <td key={idx}>{claimItem}</td>
                ))}
            </tr>
        );
    });

    return (
        <>
            <div className="data-area-div">
                <p>
                    See below the claims in your <strong>ID token</strong>. For more information, visit:{' '}
                    <span>
                        <a href="https://docs.microsoft.com/en-us/azure/active-directory/develop/id-tokens#claims-in-an-id-token">
                            docs.microsoft.com
                        </a>
                    </span>
                </p>
                <div className="data-area-div">
                    {/* Display token claims in a table */}
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>Claim</th>
                                <th>Value</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>{tableRow}</tbody>
                    </Table>

                    {/* Display roles if available */}
                    {roles.length > 0 && (
                        <div>
                            <h4>Roles:</h4>
                            <ul>
                                {roles.map((role, index) => (
                                    <li key={index}>{role}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
