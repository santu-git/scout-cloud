import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DropletsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-droplets',
  templateUrl: 'droplets.html',
})
export class DropletsPage {

  private droplets = [
    {
      "id": 76815887,
      "name": "qube-app-01",
      "memory": 512,
      "vcpus": 1,
      "disk": 20,
      "locked": false,
      "status": "active",
      "kernel": null,
      "created_at": "2017-12-29T05:37:24Z",
      "features": [
        "private_networking",
        "monitoring"
      ],
      "backup_ids": [],
      "next_backup_window": null,
      "snapshot_ids": [],
      "image": {
        "id": 29995409,
        "name": "16.04.3 x64",
        "distribution": "Ubuntu",
        "slug": null,
        "public": false,
        "regions": [
          "nyc1",
          "sfo1",
          "nyc2",
          "ams2",
          "sgp1",
          "lon1",
          "nyc3",
          "ams3",
          "fra1",
          "tor1",
          "sfo2",
          "blr1"
        ],
        "created_at": "2017-12-10T00:53:42Z",
        "min_disk_size": 20,
        "type": "snapshot",
        "size_gigabytes": 0.3
      },
      "volume_ids": [],
      "size": {
        "slug": "512mb",
        "memory": 512,
        "vcpus": 1,
        "disk": 20,
        "transfer": 1,
        "price_monthly": 5,
        "price_hourly": 0.00744,
        "regions": [
          "ams2",
          "ams3",
          "blr1",
          "fra1",
          "lon1",
          "nyc1",
          "nyc2",
          "nyc3",
          "sfo1",
          "sfo2",
          "sgp1",
          "tor1"
        ],
        "available": true
      },
      "size_slug": "512mb",
      "networks": {
        "v4": [
          {
            "ip_address": "139.59.40.232",
            "netmask": "255.255.240.0",
            "gateway": "139.59.32.1",
            "type": "public"
          },
          {
            "ip_address": "10.139.8.192",
            "netmask": "255.255.0.0",
            "gateway": "10.139.0.1",
            "type": "private"
          }
        ],
        "v6": []
      },
      "region": {
        "name": "Bangalore 1",
        "slug": "blr1",
        "sizes": [
          "512mb",
          "1gb",
          "2gb",
          "s-1vcpu-3gb",
          "4gb",
          "c-2",
          "8gb",
          "m-1vcpu-8gb",
          "c-4",
          "16gb",
          "m-16gb",
          "c-8",
          "m-32gb",
          "32gb",
          "c-16",
          "48gb",
          "64gb",
          "m-64gb",
          "m-128gb",
          "m-224gb"
        ],
        "features": [
          "private_networking",
          "backups",
          "ipv6",
          "metadata",
          "install_agent",
          "storage"
        ],
        "available": true
      },
      "tags": [
        "rails-server"
      ]
    },
    {
      "id": 76819949,
      "name": "ease-app-01",
      "memory": 512,
      "vcpus": 1,
      "disk": 20,
      "locked": false,
      "status": "active",
      "kernel": null,
      "created_at": "2017-12-29T06:28:56Z",
      "features": [
        "private_networking",
        "monitoring"
      ],
      "backup_ids": [],
      "next_backup_window": null,
      "snapshot_ids": [],
      "image": {
        "id": 30495472,
        "name": "qube-app-01-1514528639319",
        "distribution": "Ubuntu",
        "slug": null,
        "public": false,
        "regions": [
          "blr1"
        ],
        "created_at": "2017-12-29T06:24:09Z",
        "min_disk_size": 20,
        "type": "snapshot",
        "size_gigabytes": 1.89
      },
      "volume_ids": [],
      "size": {
        "slug": "512mb",
        "memory": 512,
        "vcpus": 1,
        "disk": 20,
        "transfer": 1,
        "price_monthly": 5,
        "price_hourly": 0.00744,
        "regions": [
          "ams2",
          "ams3",
          "blr1",
          "fra1",
          "lon1",
          "nyc1",
          "nyc2",
          "nyc3",
          "sfo1",
          "sfo2",
          "sgp1",
          "tor1"
        ],
        "available": true
      },
      "size_slug": "512mb",
      "networks": {
        "v4": [
          {
            "ip_address": "139.59.13.186",
            "netmask": "255.255.240.0",
            "gateway": "139.59.0.1",
            "type": "public"
          },
          {
            "ip_address": "10.139.144.199",
            "netmask": "255.255.0.0",
            "gateway": "10.139.0.1",
            "type": "private"
          }
        ],
        "v6": []
      },
      "region": {
        "name": "Bangalore 1",
        "slug": "blr1",
        "sizes": [
          "512mb",
          "1gb",
          "2gb",
          "s-1vcpu-3gb",
          "4gb",
          "c-2",
          "8gb",
          "m-1vcpu-8gb",
          "c-4",
          "16gb",
          "m-16gb",
          "c-8",
          "m-32gb",
          "32gb",
          "c-16",
          "48gb",
          "64gb",
          "m-64gb",
          "m-128gb",
          "m-224gb"
        ],
        "features": [
          "private_networking",
          "backups",
          "ipv6",
          "metadata",
          "install_agent",
          "storage"
        ],
        "available": true
      },
      "tags": [
        "rails-server"
      ]
    },
    {
      "id": 76820083,
      "name": "lame-app-01",
      "memory": 512,
      "vcpus": 1,
      "disk": 20,
      "locked": false,
      "status": "active",
      "kernel": null,
      "created_at": "2017-12-29T06:30:42Z",
      "features": [
        "private_networking",
        "monitoring"
      ],
      "backup_ids": [],
      "next_backup_window": null,
      "snapshot_ids": [],
      "image": {
        "id": 30495472,
        "name": "qube-app-01-1514528639319",
        "distribution": "Ubuntu",
        "slug": null,
        "public": false,
        "regions": [
          "blr1"
        ],
        "created_at": "2017-12-29T06:24:09Z",
        "min_disk_size": 20,
        "type": "snapshot",
        "size_gigabytes": 1.89
      },
      "volume_ids": [],
      "size": {
        "slug": "512mb",
        "memory": 512,
        "vcpus": 1,
        "disk": 20,
        "transfer": 1,
        "price_monthly": 5,
        "price_hourly": 0.00744,
        "regions": [
          "ams2",
          "ams3",
          "blr1",
          "fra1",
          "lon1",
          "nyc1",
          "nyc2",
          "nyc3",
          "sfo1",
          "sfo2",
          "sgp1",
          "tor1"
        ],
        "available": true
      },
      "size_slug": "512mb",
      "networks": {
        "v4": [
          {
            "ip_address": "139.59.61.217",
            "netmask": "255.255.248.0",
            "gateway": "139.59.56.1",
            "type": "public"
          },
          {
            "ip_address": "10.139.80.119",
            "netmask": "255.255.0.0",
            "gateway": "10.139.0.1",
            "type": "private"
          }
        ],
        "v6": []
      },
      "region": {
        "name": "Bangalore 1",
        "slug": "blr1",
        "sizes": [
          "512mb",
          "1gb",
          "2gb",
          "s-1vcpu-3gb",
          "4gb",
          "c-2",
          "8gb",
          "m-1vcpu-8gb",
          "c-4",
          "16gb",
          "m-16gb",
          "c-8",
          "m-32gb",
          "32gb",
          "c-16",
          "48gb",
          "64gb",
          "m-64gb",
          "m-128gb",
          "m-224gb"
        ],
        "features": [
          "private_networking",
          "backups",
          "ipv6",
          "metadata",
          "install_agent",
          "storage"
        ],
        "available": true
      },
      "tags": [
        "rails-server"
      ]
    },
    {
      "id": 76821069,
      "name": "scout-db",
      "memory": 1024,
      "vcpus": 1,
      "disk": 30,
      "locked": false,
      "status": "active",
      "kernel": null,
      "created_at": "2017-12-29T06:44:32Z",
      "features": [
        "backups",
        "private_networking",
        "monitoring"
      ],
      "backup_ids": [
        30496861,
        30657138
      ],
      "next_backup_window": {
        "start": "2018-01-10T20:00:00Z",
        "end": "2018-01-11T19:00:00Z"
      },
      "snapshot_ids": [],
      "image": {
        "id": 29995409,
        "name": "16.04.3 x64",
        "distribution": "Ubuntu",
        "slug": null,
        "public": false,
        "regions": [
          "nyc1",
          "sfo1",
          "nyc2",
          "ams2",
          "sgp1",
          "lon1",
          "nyc3",
          "ams3",
          "fra1",
          "tor1",
          "sfo2",
          "blr1"
        ],
        "created_at": "2017-12-10T00:53:42Z",
        "min_disk_size": 20,
        "type": "snapshot",
        "size_gigabytes": 0.3
      },
      "volume_ids": [],
      "size": {
        "slug": "1gb",
        "memory": 1024,
        "vcpus": 1,
        "disk": 30,
        "transfer": 2,
        "price_monthly": 10,
        "price_hourly": 0.01488,
        "regions": [
          "ams2",
          "ams3",
          "blr1",
          "fra1",
          "lon1",
          "nyc1",
          "nyc2",
          "nyc3",
          "sfo1",
          "sfo2",
          "sgp1",
          "tor1"
        ],
        "available": true
      },
      "size_slug": "1gb",
      "networks": {
        "v4": [
          {
            "ip_address": "159.89.175.196",
            "netmask": "255.255.240.0",
            "gateway": "159.89.160.1",
            "type": "public"
          },
          {
            "ip_address": "10.139.208.135",
            "netmask": "255.255.0.0",
            "gateway": "10.139.0.1",
            "type": "private"
          }
        ],
        "v6": []
      },
      "region": {
        "name": "Bangalore 1",
        "slug": "blr1",
        "sizes": [
          "512mb",
          "1gb",
          "2gb",
          "s-1vcpu-3gb",
          "4gb",
          "c-2",
          "8gb",
          "m-1vcpu-8gb",
          "c-4",
          "16gb",
          "m-16gb",
          "c-8",
          "m-32gb",
          "32gb",
          "c-16",
          "48gb",
          "64gb",
          "m-64gb",
          "m-128gb",
          "m-224gb"
        ],
        "features": [
          "private_networking",
          "backups",
          "ipv6",
          "metadata",
          "install_agent",
          "storage"
        ],
        "available": true
      },
      "tags": [
        "postgres"
      ]
    },
    {
      "id": 77534435,
      "name": "analytics-db",
      "memory": 512,
      "vcpus": 1,
      "disk": 20,
      "locked": false,
      "status": "active",
      "kernel": null,
      "created_at": "2018-01-04T11:05:26Z",
      "features": [
        "backups",
        "private_networking",
        "monitoring"
      ],
      "backup_ids": [],
      "next_backup_window": {
        "start": "2018-01-06T20:00:00Z",
        "end": "2018-01-07T19:00:00Z"
      },
      "snapshot_ids": [],
      "image": {
        "id": 27223373,
        "name": "MongoDB 3.4.7 on 16.04",
        "distribution": "Ubuntu",
        "slug": "mongodb-16-04",
        "public": true,
        "regions": [
          "nyc1",
          "sfo1",
          "nyc2",
          "ams2",
          "sgp1",
          "lon1",
          "nyc3",
          "ams3",
          "fra1",
          "tor1",
          "sfo2",
          "blr1"
        ],
        "created_at": "2017-08-21T18:49:54Z",
        "min_disk_size": 20,
        "type": "snapshot",
        "size_gigabytes": 0.45
      },
      "volume_ids": [],
      "size": {
        "slug": "512mb",
        "memory": 512,
        "vcpus": 1,
        "disk": 20,
        "transfer": 1,
        "price_monthly": 5,
        "price_hourly": 0.00744,
        "regions": [
          "ams2",
          "ams3",
          "blr1",
          "fra1",
          "lon1",
          "nyc1",
          "nyc2",
          "nyc3",
          "sfo1",
          "sfo2",
          "sgp1",
          "tor1"
        ],
        "available": true
      },
      "size_slug": "512mb",
      "networks": {
        "v4": [
          {
            "ip_address": "139.59.6.69",
            "netmask": "255.255.240.0",
            "gateway": "139.59.0.1",
            "type": "public"
          },
          {
            "ip_address": "10.139.80.156",
            "netmask": "255.255.0.0",
            "gateway": "10.139.0.1",
            "type": "private"
          }
        ],
        "v6": []
      },
      "region": {
        "name": "Bangalore 1",
        "slug": "blr1",
        "sizes": [
          "512mb",
          "1gb",
          "2gb",
          "s-1vcpu-3gb",
          "4gb",
          "c-2",
          "8gb",
          "m-1vcpu-8gb",
          "c-4",
          "16gb",
          "m-16gb",
          "c-8",
          "m-32gb",
          "32gb",
          "c-16",
          "48gb",
          "64gb",
          "m-64gb",
          "m-128gb",
          "m-224gb"
        ],
        "features": [
          "private_networking",
          "backups",
          "ipv6",
          "metadata",
          "install_agent",
          "storage"
        ],
        "available": true
      },
      "tags": [
        "mongo"
      ]
    },
    {
      "id": 77537758,
      "name": "mono-app-01",
      "memory": 512,
      "vcpus": 1,
      "disk": 20,
      "locked": false,
      "status": "active",
      "kernel": null,
      "created_at": "2018-01-04T11:36:09Z",
      "features": [
        "private_networking",
        "monitoring"
      ],
      "backup_ids": [],
      "next_backup_window": null,
      "snapshot_ids": [
        30652927
      ],
      "image": {
        "id": 29160863,
        "name": "NodeJS 6.11.5 on 16.04",
        "distribution": "Ubuntu",
        "slug": "node-16-04",
        "public": true,
        "regions": [
          "nyc1",
          "sfo1",
          "nyc2",
          "ams2",
          "sgp1",
          "lon1",
          "nyc3",
          "ams3",
          "fra1",
          "tor1",
          "sfo2",
          "blr1"
        ],
        "created_at": "2017-11-07T15:58:26Z",
        "min_disk_size": 20,
        "type": "snapshot",
        "size_gigabytes": 0.41
      },
      "volume_ids": [],
      "size": {
        "slug": "512mb",
        "memory": 512,
        "vcpus": 1,
        "disk": 20,
        "transfer": 1,
        "price_monthly": 5,
        "price_hourly": 0.00744,
        "regions": [
          "ams2",
          "ams3",
          "blr1",
          "fra1",
          "lon1",
          "nyc1",
          "nyc2",
          "nyc3",
          "sfo1",
          "sfo2",
          "sgp1",
          "tor1"
        ],
        "available": true
      },
      "size_slug": "512mb",
      "networks": {
        "v4": [
          {
            "ip_address": "139.59.90.133",
            "netmask": "255.255.240.0",
            "gateway": "139.59.80.1",
            "type": "public"
          },
          {
            "ip_address": "10.139.112.49",
            "netmask": "255.255.0.0",
            "gateway": "10.139.0.1",
            "type": "private"
          }
        ],
        "v6": []
      },
      "region": {
        "name": "Bangalore 1",
        "slug": "blr1",
        "sizes": [
          "512mb",
          "1gb",
          "2gb",
          "s-1vcpu-3gb",
          "4gb",
          "c-2",
          "8gb",
          "m-1vcpu-8gb",
          "c-4",
          "16gb",
          "m-16gb",
          "c-8",
          "m-32gb",
          "32gb",
          "c-16",
          "48gb",
          "64gb",
          "m-64gb",
          "m-128gb",
          "m-224gb"
        ],
        "features": [
          "private_networking",
          "backups",
          "ipv6",
          "metadata",
          "install_agent",
          "storage"
        ],
        "available": true
      },
      "tags": [
        "nodejs"
      ]
    },
    {
      "id": 77538527,
      "name": "scoutlive-01",
      "memory": 512,
      "vcpus": 1,
      "disk": 20,
      "locked": false,
      "status": "active",
      "kernel": null,
      "created_at": "2018-01-04T11:43:26Z",
      "features": [
        "private_networking",
        "monitoring"
      ],
      "backup_ids": [],
      "next_backup_window": null,
      "snapshot_ids": [],
      "image": {
        "id": 30652927,
        "name": "mono-app-01-1515066033802",
        "distribution": "Ubuntu",
        "slug": null,
        "public": false,
        "regions": [
          "blr1"
        ],
        "created_at": "2018-01-04T11:40:37Z",
        "min_disk_size": 20,
        "type": "snapshot",
        "size_gigabytes": 1.37
      },
      "volume_ids": [],
      "size": {
        "slug": "512mb",
        "memory": 512,
        "vcpus": 1,
        "disk": 20,
        "transfer": 1,
        "price_monthly": 5,
        "price_hourly": 0.00744,
        "regions": [
          "ams2",
          "ams3",
          "blr1",
          "fra1",
          "lon1",
          "nyc1",
          "nyc2",
          "nyc3",
          "sfo1",
          "sfo2",
          "sgp1",
          "tor1"
        ],
        "available": true
      },
      "size_slug": "512mb",
      "networks": {
        "v4": [
          {
            "ip_address": "139.59.89.195",
            "netmask": "255.255.240.0",
            "gateway": "139.59.80.1",
            "type": "public"
          },
          {
            "ip_address": "10.139.112.101",
            "netmask": "255.255.0.0",
            "gateway": "10.139.0.1",
            "type": "private"
          }
        ],
        "v6": []
      },
      "region": {
        "name": "Bangalore 1",
        "slug": "blr1",
        "sizes": [
          "512mb",
          "1gb",
          "2gb",
          "s-1vcpu-3gb",
          "4gb",
          "c-2",
          "8gb",
          "m-1vcpu-8gb",
          "c-4",
          "16gb",
          "m-16gb",
          "c-8",
          "m-32gb",
          "32gb",
          "c-16",
          "48gb",
          "64gb",
          "m-64gb",
          "m-128gb",
          "m-224gb"
        ],
        "features": [
          "private_networking",
          "backups",
          "ipv6",
          "metadata",
          "install_agent",
          "storage"
        ],
        "available": true
      },
      "tags": [
        "reactjs"
      ]
    },
    {
      "id": 77541430,
      "name": "solr-engine",
      "memory": 512,
      "vcpus": 1,
      "disk": 20,
      "locked": false,
      "status": "active",
      "kernel": null,
      "created_at": "2018-01-04T12:12:56Z",
      "features": [
        "private_networking",
        "monitoring"
      ],
      "backup_ids": [],
      "next_backup_window": null,
      "snapshot_ids": [],
      "image": {
        "id": 30639246,
        "name": "16.04.3 x64",
        "distribution": "Ubuntu",
        "slug": "ubuntu-16-04-x64",
        "public": true,
        "regions": [
          "nyc1",
          "sfo1",
          "nyc2",
          "ams2",
          "sgp1",
          "lon1",
          "nyc3",
          "ams3",
          "fra1",
          "tor1",
          "sfo2",
          "blr1"
        ],
        "created_at": "2018-01-04T00:42:28Z",
        "min_disk_size": 20,
        "type": "snapshot",
        "size_gigabytes": 0.3
      },
      "volume_ids": [],
      "size": {
        "slug": "512mb",
        "memory": 512,
        "vcpus": 1,
        "disk": 20,
        "transfer": 1,
        "price_monthly": 5,
        "price_hourly": 0.00744,
        "regions": [
          "ams2",
          "ams3",
          "blr1",
          "fra1",
          "lon1",
          "nyc1",
          "nyc2",
          "nyc3",
          "sfo1",
          "sfo2",
          "sgp1",
          "tor1"
        ],
        "available": true
      },
      "size_slug": "512mb",
      "networks": {
        "v4": [
          {
            "ip_address": "139.59.36.29",
            "netmask": "255.255.240.0",
            "gateway": "139.59.32.1",
            "type": "public"
          },
          {
            "ip_address": "10.139.8.115",
            "netmask": "255.255.0.0",
            "gateway": "10.139.0.1",
            "type": "private"
          }
        ],
        "v6": []
      },
      "region": {
        "name": "Bangalore 1",
        "slug": "blr1",
        "sizes": [
          "512mb",
          "1gb",
          "2gb",
          "s-1vcpu-3gb",
          "4gb",
          "c-2",
          "8gb",
          "m-1vcpu-8gb",
          "c-4",
          "16gb",
          "m-16gb",
          "c-8",
          "m-32gb",
          "32gb",
          "c-16",
          "48gb",
          "64gb",
          "m-64gb",
          "m-128gb",
          "m-224gb"
        ],
        "features": [
          "private_networking",
          "backups",
          "ipv6",
          "metadata",
          "install_agent",
          "storage"
        ],
        "available": true
      },
      "tags": [
        "apache-solr"
      ]
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() { }

  navigateDetail(data) {
    console.log(data);
  }

}
