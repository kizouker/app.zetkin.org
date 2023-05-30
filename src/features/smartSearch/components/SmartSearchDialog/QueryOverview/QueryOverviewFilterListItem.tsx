import { Divider } from '@mui/material';
import { FC } from 'react';

import getFilterComponents from './getFilterComponents';
import QueryOverviewChip from './QueryOverviewChip';
import QueryOverviewListItem from './QueryOverviewListItem';
import { SmartSearchSankeyFilterSegment } from '../../sankeyDiagram';
import {
  AnyFilterConfig,
  SmartSearchFilterWithId,
} from 'features/smartSearch/components/types';

interface QueryOverviewFilterListItemProps {
  filter: SmartSearchFilterWithId<AnyFilterConfig>;
  filterIndex: number;
  onDeleteFilter: (filter: SmartSearchFilterWithId<AnyFilterConfig>) => void;
  onEditFilter: (filter: SmartSearchFilterWithId<AnyFilterConfig>) => void;
  readOnly: boolean;
}

const QueryOverviewFilterListItem: FC<QueryOverviewFilterListItemProps> = ({
  filter,
  filterIndex,
  onDeleteFilter,
  onEditFilter,
  readOnly,
}) => {
  const { displayFilter, filterOperatorIcon, filterTypeIcon } =
    getFilterComponents(filter);
  return (
    <>
      <Divider />
      <QueryOverviewListItem
        canDelete={!readOnly}
        canEdit={!readOnly}
        diagram={(hovered) => (
          <SmartSearchSankeyFilterSegment
            filterIndex={filterIndex}
            hovered={hovered}
          />
        )}
        filterText={displayFilter}
        icon={
          <QueryOverviewChip
            filterOperatorIcon={filterOperatorIcon}
            filterTypeIcon={filterTypeIcon}
          />
        }
        onClickDelete={() => onDeleteFilter(filter)}
        onClickEdit={() => onEditFilter(filter)}
      />
    </>
  );
};

export default QueryOverviewFilterListItem;