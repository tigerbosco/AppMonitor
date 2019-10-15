import React from 'react';
import MaterialTable from 'material-table'
import AppInfo from '../const/AppInfo'
function AppInfoTable() {
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable className="classes"
        columns={AppInfo.columns}
        data={AppInfo.rows}     
        title="App Information"
      />
    </div>
  );
}

export default AppInfoTable;
