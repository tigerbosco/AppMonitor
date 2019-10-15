import React from 'react';
import MaterialTable from 'material-table'
import IntegrationInfo from '../const/IntegrationInfo'
function IntegrationInfoTable() {
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable className="classes"
        columns={IntegrationInfo.columns}
        data={IntegrationInfo.rows}
        title="Integration Details"
      />
    </div>
  );
}

export default IntegrationInfoTable;
