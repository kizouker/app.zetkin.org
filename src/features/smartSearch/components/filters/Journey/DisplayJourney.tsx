import { Box } from '@mui/system';
import DisplayTimeFrame from '../DisplayTimeFrame';
import { FC } from 'react';
import { getTimeFrameWithConfig } from '../../utils';
import messageIds from 'features/smartSearch/l10n/messageIds';
import { Msg } from 'core/i18n';
import UnderlinedMsg from '../../UnderlinedMsg';
import UnderlinedText from '../../UnderlinedText';
import useJourneys from 'features/journeys/hooks/useJourneys';
import { useNumericRouteParams } from 'core/hooks';
import useTags from 'features/tags/hooks/useTags';
import { ZetkinTag } from 'utils/types/zetkin';
import { Chip, Typography } from '@mui/material';
import {
  JOURNEY_CONDITION_OP,
  JourneyFilterConfig,
  OPERATION,
  SmartSearchFilterWithId,
} from '../../types';

interface DisplayJourneyProps {
  filter: SmartSearchFilterWithId<JourneyFilterConfig>;
}
const localMessageIds = messageIds.filters.journey;

const DisplayJourney: FC<DisplayJourneyProps> = ({ filter }): JSX.Element => {
  const { orgId } = useNumericRouteParams();
  const op = filter.op || OPERATION.ADD;
  const {
    condition,
    operator,
    journey: journeyId,
    after,
    before,
    tags: tagIds,
    min_matching,
  } = filter.config;
  const journeys = useJourneys(orgId).data || [];
  const journeyTitle = journeys?.find((item) => item.id === journeyId)?.title;
  const timeFrame = getTimeFrameWithConfig({
    after: after,
    before: before,
  });
  const { data } = useTags(orgId);
  const tags = data || [];

  const selectedTags = tagIds.reduce((acc: ZetkinTag[], id) => {
    const tag = tags.find((tag) => tag.id === id);
    if (tag) {
      return acc.concat(tag);
    }
    return acc;
  }, []);

  const notAnyTags = condition !== JOURNEY_CONDITION_OP.TAGS;
  return (
    <Msg
      id={localMessageIds.inputString}
      values={{
        addRemoveSelect: <UnderlinedMsg id={messageIds.operators[op]} />,
        condition: min_matching ? (
          <>
            <UnderlinedMsg
              id={localMessageIds.condition.preview.minMatching}
              values={{
                minMatching: min_matching,
              }}
            />
            <Typography component="span" sx={{ ml: '0.2rem' }}>
              <Msg id={localMessageIds.of} />
            </Typography>
          </>
        ) : (
          <UnderlinedMsg id={localMessageIds.condition.preview[condition]} />
        ),
        journeySelect: <UnderlinedText text={`"${journeyTitle}"`} />,
        operator: (
          <UnderlinedMsg
            id={localMessageIds[operator === 'opened' ? 'opened' : 'closed']}
          />
        ),
        statusText: (
          <Msg
            id={
              operator === 'opened'
                ? localMessageIds.thatOpened
                : localMessageIds.thatFinished
            }
          />
        ),
        tags: notAnyTags ? (
          <Box alignItems="start" display="inline-flex">
            {selectedTags.map((t) => (
              <Chip
                key={t.id}
                label={t.title}
                size="small"
                sx={{ borderColor: t.color, margin: '2px' }}
                variant="outlined"
              />
            ))}
          </Box>
        ) : null,
        tagsDesc: notAnyTags ? (
          <>
            <Msg id={localMessageIds.followingTags} /> :
          </>
        ) : null,
        timeFrame: <DisplayTimeFrame config={timeFrame} />,
      }}
    />
  );
};
export default DisplayJourney;
