import React from 'react';
import { Button } from '@/components/ui/button';
import { IconPlus } from '@tabler/icons-react';
import { api } from '@/trpc/react';

const CreateTripButton = () => {
  const createTrip = api.trip.create.useMutation();

  const handleCreateTrip = () => {
    createTrip.mutate({
      title: 'New Trip',
      destination: 'New Destination',
    });
  };
  return (
    <Button variant="outline" onClick={handleCreateTrip}>
      <IconPlus className="size-4" />
      Create Trip
    </Button>
  );
};

export default CreateTripButton;