import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Button from '@oracle/elements/Button';
import Checkbox from '@oracle/elements/Checkbox';
import FlexContainer from '@oracle/components/FlexContainer';
import Headline from '@oracle/elements/Headline';
import Link from '@oracle/elements/Link';
import PrivateRoute from '@components/shared/PrivateRoute';
import SettingsDashboard from '@components/settings/Dashboard';
import { Col } from '@components/shared/Grid';
import Spacing from '@oracle/elements/Spacing';
import SyncType, {
  GIT_FIELDS,
  SYNC_FIELDS,
} from '@interfaces/SyncType';
import Text from '@oracle/elements/Text';
import TextInput from '@oracle/elements/Inputs/TextInput';
import api from '@api';
import {
  PADDING_UNITS,
  UNITS_BETWEEN_ITEMS_IN_SECTIONS,
  UNITS_BETWEEN_SECTIONS,
} from '@oracle/styles/units/spacing';
import {
  SECTION_ITEM_UUID_GIT_SETTINGS,
  SECTION_UUID_WORKSPACE,
} from '@components/settings/Dashboard/constants';
import { onSuccess } from '@api/utils/response';
import { useMutation } from 'react-query';

export interface SyncFieldType {
  autoComplete?: string;
  disabled?: boolean;
  label: string;
  required?: boolean;
  type?: string;
  uuid: string;
}

function SyncData() {
  const { data: dataSyncs } = api.syncs.list();
  const [sync, setSync] = useState<SyncType>(null);

  useEffect(() => {
    if (dataSyncs) {
      setSync(dataSyncs?.syncs?.[0]);
    }
  }, [dataSyncs]);

  const [createSync, { isLoading: isLoadingCreateSync }] = useMutation(
    api.syncs.useCreate(),
    {
      onSuccess: (response: any) => onSuccess(
        response, {
          callback: ({ sync }) => {
            if (sync) {
              setSync(sync);
              window.location.reload();
              toast.success(
                'Sync saved',
                {
                  position: toast.POSITION.BOTTOM_RIGHT,
                  toastId: 'data_sync_success',
                },
              );
            }
          },
          onErrorCallback: ({
            error: {
              message,
              type,
            },
          }) => {
            toast.error(
              message,
              {
                position: toast.POSITION.BOTTOM_RIGHT,
                toastId: type,
              },
            );
          },
        }
      )
    }
  );

  const [runSync, { isLoading: isLoadingRunSync }] = useMutation(
    api.syncs.useUpdate('git'),
    {
      onSuccess: (response: any) => onSuccess(
        response, {
          callback: ({ sync }) => {
            if (sync) {
              toast.success(
                'Data synced!',
                {
                  position: toast.POSITION.BOTTOM_RIGHT,
                  toastId: 'data_sync_success',
                },
              );
            }
          },
          onErrorCallback: ({
            error: {
              message,
              type,
            },
          }) => {
            toast.error(
              message,
              {
                position: toast.POSITION.BOTTOM_RIGHT,
                toastId: type,
              },
            );
          },
        }
      )
    }
  );

  return (
    <SettingsDashboard
      uuidItemSelected={SECTION_ITEM_UUID_GIT_SETTINGS}
      uuidWorkspaceSelected={SECTION_UUID_WORKSPACE}
    >
      <Spacing p={PADDING_UNITS}>
        <Headline>
          Git repository settings
        </Headline>
        <Spacing mt={1}>
          <Text>
            You can enable the Git integration by supplying the url
            for your remote repository. <Text inline>
              You will need to <Link href="https://docs.mage.ai/developing-in-the-cloud/setting-up-git" openNewWindow>
                set up your SSH key
              </Link> if you have not done so already.
            </Text>
          </Text>
        </Spacing>

        <FlexContainer alignItems="center">
          <form>
            {GIT_FIELDS.map(({
              autoComplete,
              disabled,
              label,
              required,
              type,
              uuid,
            }: SyncFieldType) => (
              <Spacing key={uuid} mt={2}>
                <TextInput
                  autoComplete={autoComplete}
                  disabled={disabled}
                  label={label}
                  // @ts-ignore
                  onChange={e => {
                    setSync(prev => ({
                      ...prev,
                      [uuid]: e.target.value,
                    }));
                  }}
                  primary
                  required={required}
                  setContentOnMount
                  type={type}
                  value={sync?.[uuid] || ''}
                />
              </Spacing>
            ))}
          </form>
        </FlexContainer>

        <Spacing mt={UNITS_BETWEEN_ITEMS_IN_SECTIONS}>
          <Text>
            You can also set up your project to only sync with a specified branch.
          </Text>
        </Spacing>
        <FlexContainer>
          <form>
            {SYNC_FIELDS.map(({
              autoComplete,
              disabled,
              label,
              required,
              type,
              uuid,
            }: SyncFieldType) => (
              <Spacing key={uuid} mt={2}>
                <TextInput
                  autoComplete={autoComplete}
                  disabled={disabled}
                  label={label}
                  // @ts-ignore
                  onChange={e => {
                    setSync(prev => ({
                      ...prev,
                      [uuid]: e.target.value,
                    }));
                  }}
                  primary
                  required={required}
                  setContentOnMount
                  type={type}
                  value={sync?.[uuid] || ''}
                />
              </Spacing>
            ))}
          </form>
        </FlexContainer>
        <FlexContainer alignItems="center">
          <Spacing mt={2}>
            <Checkbox
              checked={sync?.sync_on_pipeline_run}
              label="Sync before each trigger run"
              onClick={() => {
                setSync(prev => ({
                  ...prev,
                  sync_on_pipeline_run: !sync?.sync_on_pipeline_run,
                }));
              }}
            />
          </Spacing>
        </FlexContainer>
        <Spacing mt={2}>
          <Button
            loading={isLoadingCreateSync}
            // @ts-ignore
            onClick={() => createSync({
              sync: sync,
            })}
            primary
          >
            Save repository settings
          </Button>
        </Spacing>

        <Spacing mt={UNITS_BETWEEN_SECTIONS}>
          <Col lg={6}>
            <Headline>
              Synchronize code from remote repository
            </Headline>

            <Spacing mt={1}>
              <Text>
                Running the sync from this page will
                run a one time sync with the remote repository.
                <br />
                This may <Text bold danger inline>overwrite</Text> your
                existing data, so make sure you’ve committed or backed up your current changes.
              </Text>
            </Spacing>

            <Spacing mt={2}>
              <Button
                loading={isLoadingRunSync}
                onClick={() => confirm(
                  'Are you sure you want to sync code from a remote repository and ' +
                  'overwrite the current code base?',
                  // @ts-ignore
                  () => runSync({
                    sync: {
                      action_type: 'sync_data',
                    },
                }))}
              >
                Synchronize code
              </Button>
            </Spacing>
          </Col>
        </Spacing>
      </Spacing>
    </SettingsDashboard>
  );
}

SyncData.getInitialProps = async () => ({});

export default PrivateRoute(SyncData);
