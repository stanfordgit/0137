<template>
  <div class="services">
    <ServicesHeader />
    <ServicesStats />
    <ServicesFooter />
  </div>
</template>

<script>
import ServicesHeader from '@/components/Services/ServicesHeader';
import ServicesStats from '@/components/Services/ServicesStats';
import ServicesFooter from '@/components/Services/ServicesFooter';
export default {
  name: 'Services',
  data() {
    return {};
  },
  components: { ServicesHeader, ServicesStats, ServicesFooter }
};
</script>

<style lang="scss" scoped>
.services {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 25px;
}
</style>
