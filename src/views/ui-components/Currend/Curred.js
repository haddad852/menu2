import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Avatar,
  IconButton,
  Box,
  Checkbox,
  Card,
  CardContent,
  Button
} from '@material-ui/core';



export default function Currend() {
  return (
    <Fragment>
      <Card >
        <div className="card-header">
          <div className="card-header--title">
            <small>Tables</small>
            <b>This table card has custom content</b>
          </div>
          <Box className="card-header--actions">
            <IconButton
              size="small"
              color="primary"
              className="text-primary"
              title="View details">
              <FontAwesomeIcon
                icon={['far', 'keyboard']}
                className="font-size-lg"
              />
            </IconButton>
          </Box>
        </div>
        <CardContent className="p-0">
          <div className="table-responsive">
            <table className="table table-striped table-hover text-nowrap mb-0">
              <thead className="thead-light">
                <tr>
                  <th style={{ width: '40%' }}>Employee</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Shanelle Wynn
                        </a>
                        <span className="text-black-50 d-block">
                          UI Engineer, Apple Inc.
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="h-auto py-0 px-3 badge badge-warning">
                      Pending
                    </div>
                  </td>
                  <td className="text-center">
                    <Box>
                      <IconButton color="primary" size="small">
                        <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                      </IconButton>
                    </Box>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Beck Simpson
                        </a>
                        <span className="text-black-50 d-block">
                          Frontend Developer
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="badge badge-success h-auto py-0 px-3">
                      Completed
                    </div>
                  </td>
                  <td className="text-center">
                    <Box>
                      <IconButton color="primary" size="small">
                        <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                      </IconButton>
                    </Box>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Regan Norris
                        </a>
                        <span className="text-black-50 d-block">
                          Senior Project Manager
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="h-auto py-0 px-3 badge badge-danger">
                      Declined
                    </div>
                  </td>
                  <td className="text-center">
                    <Box>
                      <IconButton color="primary" size="small">
                        <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                      </IconButton>
                    </Box>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      
    </Fragment>
  );
}
