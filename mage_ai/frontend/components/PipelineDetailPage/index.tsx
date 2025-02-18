import { useMemo } from 'react';

import BackfillGradient from '@oracle/icons/custom/BackfillGradient';
import BlocksSeparatedGradient from '@oracle/icons/custom/BlocksSeparatedGradient';
import BlocksStackedGradient from '@oracle/icons/custom/BlocksStackedGradient';
import ChartGradient from '@oracle/icons/custom/ChartGradient';
import ClickOutside from '@oracle/components/ClickOutside';
import Dashboard, { DashboardSharedProps } from '@components/Dashboard';
import Divider from '@oracle/elements/Divider';
import ErrorsType from '@interfaces/ErrorsType';
import ErrorPopup from '@components/ErrorPopup';
import FlexContainer from '@oracle/components/FlexContainer';
import Headline from '@oracle/elements/Headline';
import PipelineType, { PipelineTypeEnum } from '@interfaces/PipelineType';
import ScheduleGradient from '@oracle/icons/custom/ScheduleGradient';
import Spacing from '@oracle/elements/Spacing';
import TodoListGradient from '@oracle/icons/custom/TodoListGradient';
import api from '@api';

import {
  Backfill,
  BlocksSeparated,
  BlocksStacked,
  Chart,
  Schedule,
  TodoList,
} from '@oracle/icons';
import { BannerStyle } from './index.style';
import { BreadcrumbType } from '@components/shared/Header';
import { HEADER_HEIGHT } from '@components/shared/Header/index.style';
import { PageNameEnum } from './constants';
import {
  PADDING_UNITS,
  UNIT,
  UNITS_BETWEEN_ITEMS_IN_SECTIONS,
} from '@oracle/styles/units/spacing';
import { isViewer } from '@utils/session';
import { useWindowSize } from '@utils/sizes';

type PipelineDetailPageProps = {
  breadcrumbs: BreadcrumbType[];
  buildSidekick?: (opts: {
    height: number;
    heightOffset?: number;
    pipeline: PipelineType;
  }) => any;
  children: any;
  errors?: ErrorsType;
  headline?: string;
  pageName: PageNameEnum,
  pipeline: {
    uuid: string;
  };
  setErrors?: (errors: ErrorsType) => void;
  subheader?: any;
  subheaderBackground?: string;
  subheaderBackgroundImage?: string;
  subheaderButton?: any;
  subheaderText?: any;
  title?: (pipeline: PipelineType) => string;
} & DashboardSharedProps;

function PipelineDetailPage({
  after: afterProp,
  afterHidden,
  afterWidth: afterWidthProp,
  before,
  beforeWidth,
  breadcrumbs: breadcrumbsProp,
  buildSidekick,
  children,
  errors,
  headline,
  pageName,
  pipeline: pipelineProp,
  setErrors,
  subheader,
  subheaderBackground,
  subheaderBackgroundImage,
  subheaderButton,
  subheaderText,
  title,
  uuid,
}: PipelineDetailPageProps) {
  const { height } = useWindowSize();

  const pipelineUUID = pipelineProp.uuid;
  const { data } = api.pipelines.detail(pipelineUUID, {
    includes_outputs: false,
  }, {
    revalidateOnFocus: false,
  });
  const pipeline = data?.pipeline;

  const after = useMemo(() => {
    if (afterProp) {
      return afterProp;
    } else if (buildSidekick) {
      return buildSidekick({
        height,
        heightOffset: HEADER_HEIGHT,
        pipeline,
      });
    }

    return null;
  }, [
    afterProp,
    buildSidekick,
    height,
    pipeline,
  ]);
  const afterWidth = afterWidthProp || (after ? 50 * UNIT : null);

  const breadcrumbs = useMemo(() => {
    const arr = [];

    if (pipeline) {
      arr.push(...[
        {
          label: () => 'Pipelines',
          linkProps: {
            href: '/pipelines',
          },
        },
      ]);

      if (breadcrumbsProp) {
        arr.push({
          label: () => pipeline.uuid,
          linkProps: {
            as: `/pipelines/${pipelineUUID}/triggers`,
            href: '/pipelines/[pipeline]/triggers',
          },
        });
        arr.push(...breadcrumbsProp);

        // if (!arr[arr.length - 1].gradientColor) {
        //   arr[arr.length - 1].gradientColor = PURPLE_BLUE;
        // }
        arr[arr.length - 1].bold = true;
      } else {
        arr.push({
          // gradientColor: PURPLE_BLUE,
          bold: true,
          label: () => pipeline.name,
        });
      }
    }

    return arr;
  }, [
    breadcrumbsProp,
    pipeline,
    pipelineUUID,
  ]);

  const navigationItems = [
    {
      Icon: Schedule,
      IconSelected: ScheduleGradient,
      id: PageNameEnum.TRIGGERS,
      isSelected: () => PageNameEnum.TRIGGERS === pageName,
      label: () => 'Triggers',
      linkProps: {
        as: `/pipelines/${pipelineUUID}/triggers`,
        href: '/pipelines/[pipeline]/triggers',
      },
    },
    {
      Icon: BlocksStacked,
      IconSelected: BlocksStackedGradient,
      id: PageNameEnum.RUNS,
      isSelected: () => PageNameEnum.RUNS === pageName,
      label: () => 'Runs',
      linkProps: {
        as: `/pipelines/${pipelineUUID}/runs`,
        href: '/pipelines/[pipeline]/runs',
      },
    },
    {
      Icon: Backfill,
      IconSelected: BackfillGradient,
      id: PageNameEnum.BACKFILLS,
      isSelected: () => PageNameEnum.BACKFILLS === pageName,
      label: () => 'Backfills',
      linkProps: {
        as: `/pipelines/${pipelineUUID}/backfills`,
        href: '/pipelines/[pipeline]/backfills',
      },
    },
    {
      Icon: TodoList,
      IconSelected: TodoListGradient,
      id: PageNameEnum.PIPELINE_LOGS,
      isSelected: () => PageNameEnum.PIPELINE_LOGS === pageName,
      label: () => 'Logs',
      linkProps: {
        as: `/pipelines/${pipelineUUID}/logs`,
        href: '/pipelines/[pipeline]/logs',
      },
    },
    {
      Icon: Chart,
      IconSelected: ChartGradient,
      id: PageNameEnum.MONITOR,
      isSelected: () => PageNameEnum.MONITOR === pageName,
      label: () => 'Monitor',
      linkProps: {
        as: `/pipelines/${pipelineUUID}/monitors`,
        href: '/pipelines/[pipeline]/monitors',
      },
    },
  ];

  if (PipelineTypeEnum.INTEGRATION === pipeline?.type) {
    navigationItems.unshift({
      Icon: BlocksSeparated,
      IconSelected: BlocksSeparatedGradient,
      id: PageNameEnum.SYNCS,
      isSelected: () => PageNameEnum.SYNCS === pageName,
      label: () => 'Syncs',
      linkProps: {
        as: `/pipelines/${pipelineUUID}/syncs`,
        href: '/pipelines/[pipeline]/syncs',
      },
    });
  }

  if (!isViewer()) {
    // @ts-ignore
    navigationItems.unshift({
      Icon: null,
      IconSelected: null,
      id: PageNameEnum.EDIT,
      label: () => 'Edit pipeline',
      linkProps: {
        as: `/pipelines/${pipelineUUID}/edit`,
        href: '/pipelines/[pipeline]/edit',
      },
    });
  }

  return (
    <>
      <Dashboard
        after={after}
        afterHidden={afterHidden}
        afterWidth={afterWidth}
        before={before}
        beforeWidth={beforeWidth}
        breadcrumbs={breadcrumbs}
        navigationItems={navigationItems}
        subheaderChildren={typeof subheader !== 'undefined' && subheader}
        title={pipeline ? (title ? title(pipeline) : pipeline.name) : null}
        uuid={uuid}
      >
        {(subheaderButton || subheaderText) && (
          <Spacing
            mb={UNITS_BETWEEN_ITEMS_IN_SECTIONS}
            mt={PADDING_UNITS}
            mx={PADDING_UNITS}
          >
            <BannerStyle background={subheaderBackground} backgroundImage={subheaderBackgroundImage}>
              <FlexContainer alignItems="center">
                {subheaderButton}
                {subheaderText && <Spacing ml={3} />}
                {subheaderText}
              </FlexContainer>
            </BannerStyle>
          </Spacing>
        )}

        {headline && (
          <Spacing p={PADDING_UNITS}>
            <Spacing mt={PADDING_UNITS} px={PADDING_UNITS}>
              <Headline level={5}>
                {headline}
              </Headline>
              <Divider light mt={PADDING_UNITS} short />
            </Spacing>
          </Spacing>
        )}

        {children}
      </Dashboard>

      {errors && (
        <ClickOutside
          disableClickOutside
          isOpen
          onClickOutside={() => setErrors?.(null)}
        >
          <ErrorPopup
            {...errors}
            onClose={() => setErrors?.(null)}
          />
        </ClickOutside>
      )}
    </>
  );
}

export default PipelineDetailPage;
