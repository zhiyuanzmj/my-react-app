type Slots = {
  default: (props: { name: string }) => any;
  title: (props: { name: string }) => any;
};

export default function ({
  vSlots: vSlots,
}: {
  vSlots?: Slots;
}) {
  return (
    <fieldset>
      <legend>v-slots</legend>

      <Child>
        <template
          v-if={vSlots}
          v-for={(Slot, slotName) in vSlots}
          v-slot:$slotName$={scope}
        >
          <Slot {...scope} />
        </template>
      </Child>
    </fieldset>
  );
}

const Child = ({
  vSlots,
}: {
  vSlots?: Slots;
}) => {
  return (
    <>
      <template v-if={vSlots} v-for={(Slot, slotName) in vSlots}>
        <Slot name={slotName} />
      </template>
    </>
  );
};